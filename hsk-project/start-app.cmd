@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required to run the local audio server.
  pause
  exit /b 1
)
start "HSK Learning Server" /min cmd /c "node tools\tts-proxy.js"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4174/"
endlocal
