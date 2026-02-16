const pages = {
home: {
  title: "Elkous-Digital",
  content: `
    <!-- Hero Section -->
    <section class="hero-section" dir='rtl'>
      <div class="hero-content">
        <h1>تصميم وتطوير Landing Pages ومواقع ويب احترافية</h1>
        <p>
          بخبرة تتجاوز 6 سنوات في تصميم وتطوير مواقع ويب سريعة وخفيفة، مع التركيز على تجربة المستخدم وبناء Landing Pages ومواقع موجهة لجلب الزبناء ورفع نسبة التحويل وتحقيق نتائج حقيقية.
        </p>
        <a href="#form" class="hero-btn">طلب خدمة</a>
      </div>
      <div class="hero-image">
        <img src="Elkous-digital1-ezgif.com-png-to-webp-converter.webp" alt="Landing Page Developer">
      </div>
    </section>

<!-- Landing Pages Section (وسط الصفحة) -->
<section id="landing-pages">
  <h2>اكتشف صفحاتنا الخاصة</h2>
  <p>اضغط على أي رابط لتشاهد الخدمة مباشرة:</p>
  <ul>
    <li><a href="https://elkous.github.io/elkous-digital/Landing-Page01.html" target="_blank">Landing Page 1</a></li>
    <li><a href="https://elkous.github.io/elkous-digital/Landing-Page02.html" target="_blank">Landing Page 2</a></li>
    <li><a href="https://landingpage3.com" target="_blank">Landing Page 3</a></li>
  </ul>
  <p>كل صفحة تفتح في تبويب جديد لتبقى قادر على العودة للموقع الرئيسي بسهولة.</p>
</section>


    <!-- Problems Section -->
    <section class="problems-section">
      <h2>المشاكل الشائعة في صفحات الهبوط</h2>
      <p class="problems-intro">
        يعاني العديد من أصحاب المشاريع من ضعف أداء صفحات الهبوط،
        ليس بسبب المنتج أو الخدمة، ولكن نتيجة أخطاء شائعة في التصميم والبنية وتجربة المستخدم.
      </p>
      <div class="problems-list">
        <div class="problem-item"><h3>بطء تحميل الصفحة</h3><p>اعتماد ملفات وصور غير محسّنة يؤدي إلى بطء التحميل.</p></div>
        <div class="problem-item"><h3>غياب رسالة واضحة</h3><p>عدم وضوح القيمة المقترحة يجعل الزائر غير قادر على فهم الفائدة بسرعة.</p></div>
        <div class="problem-item"><h3>تجربة مستخدم ضعيفة</h3><p>تصميم غير متجاوب أو معقد يؤدي لصعوبة التصفح.</p></div>
        <div class="problem-item"><h3>دعوة إلى إجراء غير فعّالة</h3><p>غياب زر واضح يقلل من نسبة التحويل.</p></div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions-section">
      <h2>الحلول التي أقدّمها</h2>
      <div class="solutions-list">
        <div class="solution-item"><h3>تحسين سرعة التحميل</h3><p>بناء صفحات خفيفة مع ضغط الصور وتقليل الملفات لضمان تحميل سريع.</p></div>
        <div class="solution-item"><h3>رسالة واضحة</h3><p>صياغة محتوى يوضح الفائدة الأساسية خلال الثواني الأولى.</p></div>
        <div class="solution-item"><h3>تصميم متجاوب</h3><p>واجهات بسيطة وسلسة تعمل على جميع الأجهزة.</p></div>
        <div class="solution-item"><h3>دعوات إجراء مدروسة</h3><p>أزرار واضحة وجذابة لتحفيز الزائر على التفاعل.</p></div>
        <div class="solution-item"><h3>تحسين البنية التقنية وSEO</h3><p>اعتماد هيكلة HTML سليمة وتهيئة تقنية تساعد محركات البحث.</p></div>
        <div class="solution-item"><h3>متابعة وتحسين مستمر</h3><p>تحليل سلوك الزوار وتقديم اقتراحات تطوير مستمرة.</p></div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>جاهز لرفع مستوى موقعك وتحقيق نتائج حقيقية؟</h2>
        <p>دعني أصمّم لك Landing Page أو موقع ويب احترافي سريع، متجاوب، ومصمم لجلب الزبناء.</p>
        <a href="#form" class="cta-btn">اطلب الخدمة الآن</a>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="form" class="contact-form-section">
      <h2>تواصل معي الآن</h2>
      <p>عمر الحقول بالبيانات الصحيحة وسأتواصل معك في أقرب وقت.</p>
      <div class="contact-form">
        <div class="form-group">
          <label for="name">الإسم الكامل</label>
          <input type="text" id="name" placeholder="الإسم الكامل" required>
        </div>
        <div class="form-group">
          <label for="phone" >رقم الهاتف</label>
          <input dir='rtl' type="tel" id="phone" placeholder="رقم الهاتف" required>
        </div>
        <div class="form-group">
          <label for="email">البريد الإلكتروني</label>
          <input type="email" id="email" placeholder="البريد الإلكتروني" required>
        </div>
        <button id="sendBtn" class="form-btn">أرسل عبر WhatsApp</button>
      </div>
    </section>
  `
}
,
  about: {
    title: "من نحن",
    content: `
    <section class="about-section" dir="rtl">
  <div class="about-container">

    <h2>من أنا</h2>

    <p class="about-intro">
      أنا مطوّر ومصمّم مواقع ويب متخصص في إنشاء Landing Pages
      ومواقع ويب احترافية، سريعة، وموجهة لتحقيق النتائج.
    </p>

    <p>
      أمتلك خبرة تزيد عن <strong>6 سنوات</strong> في تصميم وتطوير
      مواقع الويب، مع تركيز خاص على تحسين الأداء، تجربة المستخدم،
      وبناء صفحات هبوط تساعد على جذب الزبناء ورفع نسبة التحويل.
    </p>

    <p>
      أعمل على تحليل احتياجات كل مشروع بعناية، ثم تصميم حل رقمي
      مناسب يجمع بين البساطة، السرعة، والفعالية، سواء كان المشروع
      Landing Page تسويقية أو موقع ويب متكامل.
    </p>

    <p>
      هدفي هو مساعدة أصحاب المشاريع على التواجد الرقمي القوي،
      وتحويل الزوار إلى عملاء حقيقيين من خلال تصميم ذكي
      وبنية تقنية سليمة.
    </p>

    <div class="about-stats">
      <div class="stat-item">
        <strong>+6</strong>
        <span>سنوات خبرة</span>
      </div>
      <div class="stat-item">
        <strong>50+</strong>
        <span>مشروع منجز</span>
      </div>
      <div class="stat-item">
        <strong>100%</strong>
        <span>تركيز على الأداء</span>
      </div>
    </div>

  </div>
</section>

    `
  },
  services: {
    title: "خدماتنا",
    content: `
    <section class="services-section" dir="rtl">
  <div class="services-container">

    <h2>خدماتنا</h2>

    <p class="services-intro">
      أقدّم مجموعة من الخدمات الرقمية المصمّمة خصيصًا
      لمساعدة أصحاب المشاريع على بناء حضور قوي على الويب
      وتحقيق نتائج ملموسة.
    </p>

    <div class="services-list">

      <div class="service-item">
        <h3>تصميم وتطوير Landing Pages</h3>
        <p>
          إنشاء صفحات هبوط احترافية، سريعة، وموجهة للتحويل،
          مع رسالة واضحة ودعوات إجراء مدروسة تساعد على
          تحويل الزوار إلى عملاء.
        </p>
      </div>

      <div class="service-item">
        <h3>تصميم وتطوير مواقع ويب ثابتة</h3>
        <p>
          تطوير مواقع ويب Static خفيفة وسريعة التحميل،
          مناسبة للشركات، المشاريع الصغيرة، والعلامات
          التجارية التي تبحث عن البساطة والأداء.
        </p>
      </div>

      <div class="service-item">
        <h3>تحسين الأداء وسرعة المواقع</h3>
        <p>
          تحسين سرعة التحميل وتجربة المستخدم عبر
          ضغط الملفات، تحسين الصور، وتنظيم البنية
          التقنية للموقع.
        </p>
      </div>

      <div class="service-item">
        <h3>تحسين تجربة المستخدم (UX)</h3>
        <p>
          تحليل سلوك الزوار وتصميم واجهات سهلة
          وبسيطة تساعد المستخدم على الوصول
          للمعلومة واتخاذ القرار بسهولة.
        </p>
      </div>

      <div class="service-item">
        <h3>تهيئة المواقع لمحركات البحث (SEO أساسي)</h3>
        <p>
          إعداد هيكلة HTML سليمة، عناوين واضحة،
          وتحسينات تقنية تساعد محركات البحث
          على فهم الموقع دون التأثير على السرعة.
        </p>
      </div>

      <div class="service-item">
        <h3>استشارات وتحسين التحويل</h3>
        <p>
          تقديم استشارات تقنية وتسويقية لتحسين
          صفحات الهبوط وزيادة نسبة التحويل
          بناءً على تحليل الأداء.
        </p>
      </div>

    </div>

  </div>
</section>

    `
  },
  contact: {
    title: "تواصل معنا",
    content: `
    <section class="contact-section" dir="rtl">
  <div class="contact-container">

    <h2>تواصل معنا</h2>

    <p class="contact-intro">
      إذا كانت لديك فكرة مشروع أو تحتاج إلى Landing Page
      أو موقع ويب احترافي، لا تتردد في التواصل معي.
      سأكون سعيدًا بمساعدتك.
    </p>

    <div class="contact-boxes">

      <div class="contact-box">
        <h3>البريد الإلكتروني</h3>
        <p>elkouss.digital@gmail.com</p>
      </div>

      <div class="contact-box">
        <h3>الهاتف / WhatsApp</h3>
        <p dir='ltr'>+212 6 20490769</p>
      </div>

      <div class="contact-box">
        <h3>مدة الرد</h3>
        <p>أقل من 24 ساعة</p>
      </div>

    </div>

  </div>
</section>

    `
  },
   form: {
    title: "اطلب موقعك التعريفي اليوم",
    content: `<div class="header">
  <h1>اطلب موقعك التعريفي اليوم</h1>
  <p>سهل وسريع، احصل على السعر قبل التواصل على WhatsApp</p>
</div>

<main>
  <h2>Form طلب موقع</h2>
  <form id="landingForm">
    <label>اسم الزبون</label>
    <input type="text" id="name" placeholder="اكتب اسمك" required>

    <label>نوع الموقع</label>
    <select id="siteType" required>
      <option value="">اختر...</option>
      <option value="onepage">One Page</option>
      <option value="multipage">Multi Page</option>
    </select>

    <div id="pagesSection" style="display:none;">
      <label>عدد الصفحات (إلا Multi Page)</label>
      <input type="number" id="pages" min="1" value="1">
    </div>

    <div id="sectionsSection" style="display:none;">
      <label>عدد السكاشن (Sections) في الصفحة (إلا One Page)</label>
      <input type="number" id="sections" min="1" value="1">
    </div>

    <label>التعقيد</label>
    <select id="complexity" required>
      <option value="">اختر...</option>
      <option value="simple">بسيط</option>
      <option value="medium">متوسط</option>
      <option value="pro">احترافي</option>
    </select>

    <label>خيارات إضافية</label>
    <div class="checkbox-group">
      <label><input type="checkbox" id="design"> تصميم من الصفر</label>
      <label><input type="checkbox" id="seo"> تحسين SEO</label>
      <label><input type="checkbox" id="form"> Form فعال</label>
      <label><input type="checkbox" id="hosting"> Hosting/Domaine</label>
    </div>

    <button type="submit">احصل على السعر وأرسل WhatsApp</button>
  </form>
</main>
    `
  }
};


const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* تسد المينيو ملي تختار صفحة */
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});



function go(page){
  const app = document.getElementById("app");
  const title = document.getElementById("page-title");

  app.innerHTML = pages[page].content;
  title.innerText = pages[page].title;
  history.pushState({}, "", "#" + page);

  // WhatsApp Form listener
  if(page === "home"){
    const sendBtn = document.getElementById('sendBtn');
    if(sendBtn){
      sendBtn.addEventListener('click', function(){
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if(!name || !phone || !email){
          alert('المرجو تعبئة جميع الحقول');
          return;
        }

        const message = `مرحبا!%0Aإسمي: ${name}%0Aرقم الهاتف: ${phone}%0Aالبريد الإلكتروني: ${email}`;
        const whatsappNumber = "+212620490769"; // عدّل بالرقم ديالك

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
      });
    }
  }

  // Smooth Scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
}
document.getElementById('siteType').addEventListener('change', function(){
  if(this.value === 'onepage'){
    document.getElementById('sectionsSection').style.display = 'block';
    document.getElementById('pagesSection').style.display = 'none';
  } else if(this.value === 'multipage'){
    document.getElementById('pagesSection').style.display = 'block';
    document.getElementById('sectionsSection').style.display = 'none';
  } else {
    document.getElementById('pagesSection').style.display = 'none';
    document.getElementById('sectionsSection').style.display = 'none';
  }
});

document.getElementById('landingForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const type = document.getElementById('siteType').value;
  const complexity = document.getElementById('complexity').value;
  const pages = parseInt(document.getElementById('pages').value) || 1;
  const sections = parseInt(document.getElementById('sections').value) || 1;

  const design = document.getElementById('design').checked;
  const seo = document.getElementById('seo').checked;
  const formExtra = document.getElementById('form').checked;
  const hosting = document.getElementById('hosting').checked;

  let price = 0;

  // السعر الأساسي حسب نوع الموقع والتعقيد
  if(type === 'onepage'){
    if(complexity === 'simple') price = 1200;
    else if(complexity === 'medium') price = 1800;
    else if(complexity === 'pro') price = 2500;
    if(sections > 6) price += (sections - 6) * 200;
  } else if(type === 'multipage'){
    if(complexity === 'simple') price = 2000;
    else if(complexity === 'medium') price = 3000;
    else if(complexity === 'pro') price = 4000;
    if(pages > 5) price += (pages - 5) * 300;
  }

  // زيادة السعر حسب الخيارات الإضافية
  if(design) price += 500;
  if(seo) price += 300;
  if(formExtra) price += 200;
  if(hosting) price += 400;

  alert('السعر المتوقع لهذا الطلب: ' + price + ' DH');

  const message = `السلام عليكم، اسمي ${name}. أريد طلب موقع ${type} بتعقيد ${complexity} وعدد الصفحات: ${pages}, عدد السكاشن: ${sections}. الخيارات الإضافية: ${design ? 'تصميم من الصفر، ' : ''}${seo ? 'SEO، ' : ''}${formExtra ? 'Form فعال، ' : ''}${hosting ? 'Hosting/Domaine' : ''}. السعر المتوقع: ${price} DH`;
  const phone = '212620490769'; // غير الرقم ديالك
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

window.onload = () => {
  const page = location.hash.replace("#","") || "home";
  go(page);
};

