# 📧 Email Alias Extractor | مستخرج الإيميلات المشتقة

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Chrome](https://img.shields.io/badge/Chrome-Extension-yellow)

إضافة كروم لتوليد إيميلات Gmail مشتقة من إيميلك الأساسي |
Chrome extension to generate Gmail aliases from your primary email

</div>

---

## English | الإنجليزية

### 🌟 Features

- ✨ **Generate Gmail Aliases**: Create multiple email variations (dot & plus addressing)
- 🌍 **Bilingual Interface**: Full Arabic and English support
- 🎨 **Beautiful Gradient Design**: Modern UI with smooth gradients
- 📝 **Track Usage**: Remember which aliases you used on which websites
- ⚡ **One-Click Fill**: Automatically fill email fields on any website
- 💾 **Smart Storage**: Sync aliases across devices using Chrome sync
- 🖱️ **Context Menu**: Right-click to quickly fill email fields

### 📦 Installation

#### Method 1: Load Unpacked (For Development)

1. Download or clone this repository:
   ```bash
   git clone https://github.com/iamdev7/email-alias-extractor.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in top-right)

4. Click **Load unpacked** and select the extension folder

5. The extension icon will appear in your toolbar!

#### Method 2: Chrome Web Store (Coming Soon)

*Extension will be published soon on Chrome Web Store*

### 🚀 Usage

1. **Click the extension icon** in your toolbar

2. **Enter your primary Gmail address** (e.g., `yourname@gmail.com`)

3. **Click Generate** to create email aliases

4. **Copy or Use**:
   - Click **Copy** to copy an alias to clipboard
   - Click **Use** to auto-fill it on the current website

5. **Switch Language**: Click EN/عربي button to toggle languages

### 🔧 How Gmail Aliases Work

Gmail ignores dots (.) and anything after plus (+) in email addresses:

- `yourname@gmail.com` 
- `your.name@gmail.com` → Same inbox
- `yourname+shop@gmail.com` → Same inbox
- `your.n.ame+social@gmail.com` → Same inbox

Use different aliases for different websites to:
- Track who sells/leaks your email
- Filter emails by alias
- Maintain privacy

### 📁 Project Structure

```
email-alias-extractor/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup interface
├── popup.css             # Beautiful gradient styles
├── popup.js              # Main logic & language switching
├── content.js            # Inject emails into web pages
├── background.js         # Service worker & context menu
├── icons/                # Extension icons (16x16, 48x48, 128x128)
└── README.md             # This file
```

---

## العربية | Arabic

### 🌟 المميزات

- ✨ **توليد إيميلات مشتقة**: إنشاء صيغ متعددة من إيميلك (نقاط وعلامة +)
- 🌍 **واجهة ثنائية اللغة**: دعم كامل للعربية والإنجليزية
- 🎨 **تصميم جميل**: واجهة عصرية مع تدرجات لونية سلسة
- 📝 **تتبع الاستخدام**: تذكّر الإيميلات المستخدمة في كل موقع
- ⚡ **ملء بنقرة واحدة**: ملء حقول الإيميل تلقائياً
- 💾 **تخزين ذكي**: مزامنة الإيميلات عبر أجهزتك
- 🖱️ **قائمة سريعة**: انقر بالزر الأيمن لملء الإيميل بسرعة

### 📦 التثبيت

#### الطريقة 1: التحميل المحلي (للتطوير)

1. حمّل أو استنسخ المشروع:
   ```bash
   git clone https://github.com/iamdev7/email-alias-extractor.git
   ```

2. افتح Chrome واذهب إلى `chrome://extensions/`

3. فعّل **وضع المطور** (Developer mode)

4. اضغط **Load unpacked** واختر مجلد الإضافة

5. ستظهر أيقونة الإضافة في شريط الأدوات!

#### الطريقة 2: متجر كروم (قريباً)

*سيتم نشر الإضافة قريباً في متجر Chrome*

### 🚀 طريقة الاستخدام

1. **اضغط على أيقونة الإضافة**

2. **أدخل إيميل Gmail الأساسي** (مثال: `yourname@gmail.com`)

3. **اضغط توليد** لإنشاء الإيميلات المشتقة

4. **انسخ أو استخدم**:
   - **نسخ**: لنسخ الإيميل
   - **استخدم**: لملئه تلقائياً في الموقع الحالي

5. **تغيير اللغة**: اضغط زر EN/عربي

### 🔧 كيف تعمل الإيميلات المشتقة في Gmail؟

Gmail يتجاهل النقاط (.) وأي شيء بعد علامة (+):

- `yourname@gmail.com`
- `your.name@gmail.com` → نفس الصندوق
- `yourname+shop@gmail.com` → نفس الصندوق  
- `your.n.ame+social@gmail.com` → نفس الصندوق

استخدم إيميلات مختلفة لمواقع مختلفة لـ:
- تتبع من يبيع/يسرب إيميلك
- فلترة الرسائل حسب الإيميل المشتق
- حماية خصوصيتك

### 🛠️ التقنيات المستخدمة

- **Manifest V3** - أحدث إصدار لإضافات Chrome
- **JavaScript** - المنطق والوظائف
- **CSS3 Gradients** - تصميم جميل
- **Chrome Storage API** - حفظ البيانات
- **Content Scripts** - الحقن في الصفحات

### 📝 ملاحظات مهمة

⚠️ **الأيقونات**: المشروع يحتاج أيقونات PNG بأحجام 16x16، 48x48، 128x128. يمكنك إنشاؤها من [Canva](https://canva.com) أو [Favicon Generator](https://favicon.io)

⚠️ **النشر**: لنشر الإضافة في متجر Chrome:
1. سجّل كمطوّر ($5 لمرة واحدة)
2. احزم الملفات في ZIP
3. املأ معلومات الإضافة ولقطات الشاشة
4. أرسل للمراجعة

### 🤝 المساهمة

المساهمات مرحب بها! افتح Issue أو Pull Request

### 📄 الرخصة

MIT License - يمكنك استخدام وتعديل ونشر المشروع بحرية

### 👨‍💻 المطوّر

تم التطوير بواسطة [@iamdev7](https://github.com/iamdev7)

---

<div align="center">

⭐ إذا أعجبتك الإضافة، لا تنسى النجمة!

Star the project if you like it! ⭐

</div>
