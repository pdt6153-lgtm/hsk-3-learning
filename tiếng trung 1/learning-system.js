// Unified, versioned learning state for every HSK module.
(function createHSKLearningSystem(global) {
    'use strict';

    const STORAGE_KEY = 'hsk_learning_system_v3';
    const SCHEMA_VERSION = 3;
    const MAX_ACTIVITY_ITEMS = 300;
    const DAY_MS = 86400000;
    const SKILLS = ['vocabulary', 'listening', 'reading', 'writing', 'speaking', 'grammar', 'translation'];
    const LEVELS = [1, 2, 3, 4, 5, 6, 7];
    const listeners = new Set();
    const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('hsk-learning-sync') : null;

    function nowISO() {
        return new Date().toISOString();
    }

    function localDateKey(date = new Date()) {
        const offset = date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() - offset).toISOString().slice(0, 10);
    }

    function safeObject(value, fallback = {}) {
        return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
    }

    function readJSON(key, fallback) {
        try {
            const value = JSON.parse(localStorage.getItem(key) || 'null');
            return value ?? fallback;
        } catch {
            return fallback;
        }
    }

    function initialState() {
        return {
            schemaVersion: SCHEMA_VERSION,
            currentLevel: 1,
            goalMinutes: 30,
            streak: 0,
            lastActiveDate: '',
            totalMinutes: 0,
            wordProgress: {},
            skillStats: {},
            dailyActivity: {},
            recentActivity: [],
            updatedAt: nowISO()
        };
    }

    function migrateState(raw) {
        const base = initialState();
        const source = safeObject(raw);
        const next = {
            ...base,
            ...source,
            schemaVersion: SCHEMA_VERSION,
            currentLevel: LEVELS.includes(Number(source.currentLevel)) ? Number(source.currentLevel) : 1,
            goalMinutes: Math.max(10, Math.min(180, Number(source.goalMinutes) || 30)),
            wordProgress: safeObject(source.wordProgress),
            skillStats: safeObject(source.skillStats),
            dailyActivity: safeObject(source.dailyActivity),
            recentActivity: Array.isArray(source.recentActivity) ? source.recentActivity.slice(0, MAX_ACTIVITY_ITEMS) : []
        };

        const legacyLearned = safeObject(readJSON('hsk_learned', {}));
        Object.entries(legacyLearned).forEach(([entryId, value]) => {
            if (!value || next.wordProgress[entryId]) return;
            next.wordProgress[entryId] = {
                mastery: 3,
                repetitions: 1,
                intervalDays: 3,
                ease: 2.5,
                dueAt: new Date(Date.now() + 3 * DAY_MS).toISOString(),
                lastReviewedAt: next.updatedAt || nowISO(),
                correct: 1,
                attempts: 1
            };
        });

        const legacyStreak = Number(localStorage.getItem('hsk_streak') || 0);
        if (!next.streak && legacyStreak) next.streak = legacyStreak;
        return next;
    }

    let state = migrateState(readJSON(STORAGE_KEY, null));

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function notify(reason, external = false) {
        listeners.forEach(listener => {
            try {
                listener(clone(state), reason);
            } catch {}
        });
        try {
            global.dispatchEvent(new CustomEvent('hsk:learning-sync', {detail: {reason, external}}));
        } catch {}
    }

    function persist(reason = 'update', broadcast = true) {
        state.updatedAt = nowISO();
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {}
        if (broadcast && channel) {
            try {
                channel.postMessage({type: 'state-updated', updatedAt: state.updatedAt});
            } catch {}
        }
        notify(reason, false);
    }

    function updateStreak(dateKey = localDateKey()) {
        if (state.lastActiveDate === dateKey) return;
        const previous = new Date(`${state.lastActiveDate || '1970-01-01'}T00:00:00`);
        const current = new Date(`${dateKey}T00:00:00`);
        const gap = Math.round((current - previous) / DAY_MS);
        state.streak = gap === 1 ? Math.max(1, Number(state.streak) + 1) : 1;
        state.lastActiveDate = dateKey;
        try {
            localStorage.setItem('hsk_streak', String(state.streak));
            localStorage.setItem('hsk_lastDay', new Date().toDateString());
        } catch {}
    }

    function normalizeLevel(level) {
        const numeric = Number(level);
        return LEVELS.includes(numeric) ? numeric : 1;
    }

    function setLevel(level) {
        const numeric = normalizeLevel(level);
        if (state.currentLevel === numeric) return numeric;
        state.currentLevel = numeric;
        persist('level');
        return numeric;
    }

    function wordLevel(entryId) {
        const match = String(entryId || '').match(/^hsk3-2025:(\d+):/);
        return match ? Number(match[1]) : 0;
    }

    function reviewWord(entryId, grade = 'good', meta = {}) {
        if (!entryId) return null;
        const previous = safeObject(state.wordProgress[entryId]);
        const gradeMap = {again: 0, hard: 1, good: 2, easy: 3};
        const quality = gradeMap[grade] ?? 2;
        let repetitions = Number(previous.repetitions) || 0;
        let intervalDays = Number(previous.intervalDays) || 0;
        let ease = Number(previous.ease) || 2.5;

        if (quality === 0) {
            repetitions = 0;
            intervalDays = 0;
            ease = Math.max(1.3, ease - 0.2);
        } else {
            repetitions += 1;
            if (quality === 1) {
                intervalDays = Math.max(1, Math.round((intervalDays || 1) * 1.2));
                ease = Math.max(1.3, ease - 0.15);
            } else if (quality === 2) {
                intervalDays = repetitions === 1 ? 1 : repetitions === 2 ? 3 : Math.max(4, Math.round((intervalDays || 1) * ease));
            } else {
                intervalDays = repetitions === 1 ? 4 : Math.max(7, Math.round((intervalDays || 2) * ease * 1.35));
                ease = Math.min(3.2, ease + 0.1);
            }
        }

        const dueAt = quality === 0 ? new Date(Date.now() + 10 * 60000) : new Date(Date.now() + intervalDays * DAY_MS);
        const attempts = (Number(previous.attempts) || 0) + 1;
        const correct = (Number(previous.correct) || 0) + (quality >= 2 ? 1 : 0);
        const progress = {
            ...previous,
            mastery: Math.max(0, Math.min(5, quality === 0 ? (Number(previous.mastery) || 0) - 1 : Math.max(Number(previous.mastery) || 0, quality + 1))),
            repetitions,
            intervalDays,
            ease: Number(ease.toFixed(2)),
            dueAt: dueAt.toISOString(),
            lastReviewedAt: nowISO(),
            attempts,
            correct
        };
        state.wordProgress[entryId] = progress;

        const legacyLearned = safeObject(readJSON('hsk_learned', {}));
        if (quality >= 2) legacyLearned[entryId] = true;
        else if (quality === 0 && progress.mastery === 0) delete legacyLearned[entryId];
        try {
            localStorage.setItem('hsk_learned', JSON.stringify(legacyLearned));
        } catch {}

        if (meta.recordActivity !== false) {
            recordActivity('vocabulary', {
                level: meta.level || wordLevel(entryId) || state.currentLevel,
                correct: quality >= 2 ? 1 : 0,
                total: 1,
                source: meta.source || 'flashcard',
                durationMinutes: Number(meta.durationMinutes) || 0
            }, false);
        }
        persist('word-review');
        return clone(progress);
    }

    function markWord(entryId, learned, level = state.currentLevel) {
        if (learned) return reviewWord(entryId, 'good', {level, source: 'vocabulary-list'});
        delete state.wordProgress[entryId];
        const legacyLearned = safeObject(readJSON('hsk_learned', {}));
        delete legacyLearned[entryId];
        try {
            localStorage.setItem('hsk_learned', JSON.stringify(legacyLearned));
        } catch {}
        persist('word-unmarked');
        return null;
    }

    function recordActivity(skill, payload = {}, shouldPersist = true) {
        const normalizedSkill = SKILLS.includes(skill) ? skill : 'vocabulary';
        const level = normalizeLevel(payload.level || state.currentLevel);
        const total = Math.max(0, Number(payload.total) || 0);
        const correct = Math.max(0, Math.min(total || Number(payload.correct) || 0, Number(payload.correct) || 0));
        const durationMinutes = Math.max(0, Number(payload.durationMinutes) || 0);
        const date = localDateKey();
        const key = `${level}:${normalizedSkill}`;
        const stat = safeObject(state.skillStats[key], {attempts: 0, correct: 0, sessions: 0, minutes: 0});
        stat.attempts = Number(stat.attempts || 0) + total;
        stat.correct = Number(stat.correct || 0) + correct;
        stat.sessions = Number(stat.sessions || 0) + 1;
        stat.minutes = Number(stat.minutes || 0) + durationMinutes;
        stat.lastActiveAt = nowISO();
        state.skillStats[key] = stat;

        const daily = safeObject(state.dailyActivity[date], {minutes: 0, sessions: 0, bySkill: {}});
        daily.minutes = Number(daily.minutes || 0) + durationMinutes;
        daily.sessions = Number(daily.sessions || 0) + 1;
        daily.bySkill = safeObject(daily.bySkill);
        daily.bySkill[normalizedSkill] = Number(daily.bySkill[normalizedSkill] || 0) + 1;
        state.dailyActivity[date] = daily;
        state.totalMinutes = Number(state.totalMinutes || 0) + durationMinutes;
        state.recentActivity.unshift({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            at: nowISO(),
            date,
            skill: normalizedSkill,
            level,
            correct,
            total,
            durationMinutes,
            source: String(payload.source || normalizedSkill).slice(0, 60)
        });
        state.recentActivity = state.recentActivity.slice(0, MAX_ACTIVITY_ITEMS);
        updateStreak(date);
        if (shouldPersist) persist('activity');
    }

    function dueWords(words, limit = 30) {
        const now = Date.now();
        const ranked = (Array.isArray(words) ? words : []).map((word, index) => {
            const entryId = word.entryId || '';
            const progress = state.wordProgress[entryId];
            const dueTime = progress?.dueAt ? new Date(progress.dueAt).getTime() : 0;
            const isNew = !progress;
            return {word, isNew, dueTime, index};
        }).filter(item => item.isNew || item.dueTime <= now)
            .sort((a, b) => Number(a.isNew) - Number(b.isNew) || a.dueTime - b.dueTime || a.index - b.index);
        return ranked.slice(0, Math.max(1, limit)).map(item => item.word);
    }

    function countDue(words) {
        const now = Date.now();
        return (Array.isArray(words) ? words : []).filter(word => {
            const progress = state.wordProgress[word.entryId];
            return progress && (!progress.dueAt || new Date(progress.dueAt).getTime() <= now);
        }).length;
    }

    function skillSummary(level = state.currentLevel) {
        const normalizedLevel = normalizeLevel(level);
        return SKILLS.map(skill => {
            const stat = safeObject(state.skillStats[`${normalizedLevel}:${skill}`], {});
            const attempts = Number(stat.attempts) || 0;
            const sessions = Number(stat.sessions) || 0;
            const accuracy = attempts ? Math.round((Number(stat.correct) || 0) / attempts * 100) : 0;
            const confidence = Math.min(1, (attempts + sessions * 2) / 30);
            const score = Math.round((attempts ? accuracy : Math.min(100, sessions * 12)) * confidence);
            return {skill, attempts, sessions, accuracy, score, minutes: Math.round(Number(stat.minutes) || 0)};
        });
    }

    function summary(level = state.currentLevel, words = []) {
        const normalizedLevel = normalizeLevel(level);
        const levelWords = Array.isArray(words) ? words : [];
        const wordItems = Object.entries(state.wordProgress).filter(([entryId]) => wordLevel(entryId) === normalizedLevel);
        const learned = wordItems.filter(([, progress]) => Number(progress.mastery) >= 2).length;
        const mastered = wordItems.filter(([, progress]) => Number(progress.mastery) >= 4).length;
        const today = safeObject(state.dailyActivity[localDateKey()], {});
        const skills = skillSummary(normalizedLevel);
        const practicedSkills = skills.filter(item => item.sessions > 0);
        const readiness = practicedSkills.length ? Math.round(practicedSkills.reduce((sum, item) => sum + item.score, 0) / SKILLS.length) : 0;
        return {
            level: normalizedLevel,
            totalWords: levelWords.length,
            learned,
            mastered,
            due: countDue(levelWords),
            newWords: Math.max(0, levelWords.length - wordItems.length),
            todayMinutes: Math.round(Number(today.minutes) || 0),
            todaySessions: Number(today.sessions) || 0,
            goalMinutes: state.goalMinutes,
            streak: Number(state.streak) || 0,
            readiness,
            skills
        };
    }

    function setGoal(minutes) {
        state.goalMinutes = Math.max(10, Math.min(180, Number(minutes) || 30));
        persist('goal');
        return state.goalMinutes;
    }

    function exportData() {
        return JSON.stringify({
            product: 'HSK 3.0 Learning System',
            exportedAt: nowISO(),
            state
        }, null, 2);
    }

    function importData(input) {
        const parsed = typeof input === 'string' ? JSON.parse(input) : input;
        const candidate = safeObject(parsed?.state || parsed);
        if (!candidate.schemaVersion && !candidate.wordProgress) throw new Error('Tệp sao lưu không hợp lệ.');
        state = migrateState(candidate);
        persist('import');
        return clone(state);
    }

    function subscribe(listener) {
        if (typeof listener !== 'function') return () => {};
        listeners.add(listener);
        return () => listeners.delete(listener);
    }

    function reloadExternal() {
        const incoming = migrateState(readJSON(STORAGE_KEY, null));
        if (incoming.updatedAt && incoming.updatedAt !== state.updatedAt) {
            state = incoming;
            notify('external-sync', true);
        }
    }

    if (channel) channel.addEventListener('message', reloadExternal);
    global.addEventListener?.('storage', event => {
        if (event.key === STORAGE_KEY) reloadExternal();
    });

    global.HSKLearningSystem = Object.freeze({
        storageKey: STORAGE_KEY,
        skills: [...SKILLS],
        levels: [...LEVELS],
        getState: () => clone(state),
        setLevel,
        setGoal,
        markWord,
        reviewWord,
        recordActivity,
        dueWords,
        countDue,
        skillSummary,
        summary,
        exportData,
        importData,
        subscribe
    });
})(window);
