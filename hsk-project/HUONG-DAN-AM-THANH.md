# Huong dan am thanh truyen song ngu

## Cach chay on dinh tren Chrome, Edge, Firefox va Safari

1. Chay file `start-app.cmd`.
2. Trinh duyet se mo dia chi `http://127.0.0.1:4174/`.
3. Luon mo ung dung bang dia chi nay de am thanh duoc phat cung nguon, khong bi chan CORS hoac `file://`.

Che do mac dinh dung may chu cuc bo de tai va luu dem am thanh. Ung dung tu dieu chinh toc do va cao do theo vai, nen van phan biet duoc nhan vat khi trinh duyet khong co giong Trung Quoc.

## Thu tren dien thoai trong cung mang Wi-Fi

1. Mo Command Prompt trong thu muc du an.
2. Chay:

```bat
set HSK_TTS_HOST=0.0.0.0
node tools\tts-proxy.js
```

3. Xem dia chi IPv4 cua may tinh bang `ipconfig`.
4. Tren dien thoai, mo `http://DIA_CHI_IP:4174/`.

May tinh va dien thoai phai cung mang Wi-Fi. Neu Windows hien hop thoai Firewall, chi cho phep trong mang Private. Micro tren mot so trinh duyet chi hoat dong voi HTTPS; khi do van co the dung nut Nghe chuan, Nghe cham va tu cham.

## Giong nhan vat tu nhien hon (tuy chon)

May chu ho tro Azure Speech neu dat hai bien moi truong truoc khi chay:

```bat
set AZURE_SPEECH_KEY=your_key
set AZURE_SPEECH_REGION=southeastasia
start-app.cmd
```

Khi co cau hinh nay, moi vai se dung giong neural rieng. Khoa Azure chi duoc doc boi may chu cuc bo, khong duoc gui vao ma JavaScript cua trinh duyet.

## Gan giong rieng cho tung nhan vat

Trong characters, co the khai bao truc tiep ho so va sac thai giong:

~~~js
{
  name: "露丝",
  vi: "Lo Tu - nu sinh tre",
  voiceProfile: "youngFemale",
  voice: "zh-CN-XiaoxiaoNeural",
  style: "cheerful",
  rate: 0.9,
  pitch: 1.06
}
~~~

- voiceProfile: youngFemale, youngMale, adultFemale, adultMale, girl, boy, seniorFemale, seniorMale, professionalFemale, professionalMale, group hoac narrator.
- voice: mot trong cac giong Azure da ho tro trong tools/tts-proxy.js.
- style: phong cach Azure nhu cheerful, calm, gentle, friendly hoac customerservice. Neu giong khong ho tro style, may chu tu thu lai ma van giu dung giong, toc do va cao do.
- rate va pitch: dung he so quanh 1. Ung dung tu gioi han gia tri an toan de tranh giong qua nhanh, qua cham, qua cao hoac qua tram.

Neu nhan vat khong khai bao, ung dung suy luan theo ten/mo ta va dung preset co dinh cho cac vai lap lai nhu 露丝, 李明, 王老师, 张老师, 李妈妈, 李爸爸, 小雨, 大家 va 同学们.

Khong co Azure, cac nguon am thanh cong cong khong ho tro chon ten giong. Khi do ung dung se dung giong Trung Quoc cua thiet bi neu co, hoac nguon du phong va dieu chinh toc do de cac vai de phan biet hon.

## Dua website len Render cho moi nguoi su dung

Du an da co san render.yaml va package.json. Lam theo huong dan chi tiet trong RENDER-DEPLOY.md. Khi deploy thanh cong, website va /tts chay cung mot ten mien HTTPS; nguoi hoc chi can mo duong link Render.

## Tuong thich trinh duyet va Zalo Android

- Chrome/Edge Android va desktop: nghe mau, thu am va cham tu dong.
- Safari iPhone/iPad: nghe mau va thu am; cham tu dong phu thuoc phien ban Safari/Siri.
- Firefox: nghe mau, thu am va tu cham; Web Speech thuong khong co.
- Zalo va cac trinh duyet nam trong ung dung: luon dung duoc nghe mau va tu cham. Ung dung tu an cac nut micro khong on dinh, dong thoi hien nut mo bang Chrome/Safari va sao chep lien ket.

Micro chi hoat dong tren HTTPS hoac localhost. Khi tab bi an, doi trang hoac dong WebView, ung dung tu dung nhan dang va thu am de tranh treo micro.
