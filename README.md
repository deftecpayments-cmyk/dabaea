# موقع يورو جلف لفحص وتسجيل المركبات

## الملفات
- `public/index.html` – الصفحة الرئيسية
- `public/privacy.html` – سياسة الخصوصية
- `public/terms.html` – الشروط والأحكام
- `server.js` – سيرفر Express لعرض الصفحات
- `railway.json` – إعدادات النشر على Railway

## التشغيل محلياً
```bash
npm install
npm start
```
ثم افتح http://localhost:3000

## النشر على Railway
1. ارفع المجلد كاملاً على مستودع GitHub.
2. من Railway اختر **New Project → Deploy from GitHub repo** واختر المستودع.
3. Railway هيشغّل `npm install` ثم `npm start` تلقائياً.
4. من **Settings → Networking** اضغط **Generate Domain** أو اربط دومين خاص.
