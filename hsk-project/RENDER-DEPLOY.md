# Deploy ung dung len Render

Cau hinh nay dua ca website va may chu TTS len cung mot ten mien HTTPS. Moi nguoi chi can mo URL Render, khong can cai Node.js hay chay start-app.cmd.

## Chuan bi

1. Tao Azure Speech resource.
2. Ghi lai Speech key va Region dung cua resource.
3. Dua du an len mot GitHub repository. Khong dua key Azure vao repository.

## Tao dich vu bang Render Blueprint

1. Dang nhap Render va chon New > Blueprint.
2. Ket noi GitHub repository cua du an.
3. Render se doc render.yaml va tao Web Service hsk-chinese-learning tai Singapore.
4. Khi Render yeu cau bien moi truong, nhap:

```text
AZURE_SPEECH_KEY=<Speech key>
AZURE_SPEECH_REGION=<Region cua Azure resource>
```

Vi du Region co the la southeastasia, eastasia hoac eastus. Phai dung chinh xac Region hien trong Azure Portal.

## Kiem tra sau khi deploy

Mo cac dia chi sau, thay TEN-DICH-VU bang ten mien Render:

```text
https://TEN-DICH-VU.onrender.com/health
https://TEN-DICH-VU.onrender.com/tts-config.js
```

Health dung:

```json
{"ok":true,"mode":"azure-multivoice","servesApp":true}
```

tts-config.js phai co:

```js
window.HSK_TTS_SUPPORTS_VOICES = true;
window.HSK_TTS_ENGINE = 'azure';
```

Sau do mo trang chu, vao Truyen song ngu va bam nut nghe. Website va /tts cung ten mien nen khong can cau hinh CORS.

## Xu ly loi

- compatible-fallback: thieu key/region, sai ten bien, hoac chua redeploy sau khi dat bien.
- TTS source unavailable: key sai, Region sai, Azure resource het han muc hoac ket noi Azure bi loi.
- Lan mo dau cham: goi Free cua Render co the ngu sau mot thoi gian khong co truy cap.
- Cache am thanh nam trong thu muc tam cua Render va co the bi xoa khi service khoi dong lai.

Khong dat AZURE_SPEECH_KEY trong app.js, index.html, tts-config.js hoac bat ky file nao duoc commit.
