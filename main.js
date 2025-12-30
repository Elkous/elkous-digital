const pages = {
  home: {
    title: "الرئيسية",
    content: `
    <section class="hero-section" dir='rtl'>
      <div class="hero-content">
        <h1>تصميم وتطوير Landing Pages ومواقع ويب احترافية</h1>
        <p>
          بخبرة تتجاوز 6 سنوات في تصميم وتطوير مواقع ويب سريعة وخفيفة، مع التركيز على تجربة المستخدم وبناء Landing Pages ومواقع موجهة لجلب الزبناء ورفع نسبة التحويل وتحقيق نتائج حقيقية.
        </p>
        <a href="#form" class="hero-btn">طلب خدمة</a>
      </div>
      <div class="hero-image">
        <img src="Annotation 2025-12-30 004907.png" alt="Landing Page Developer">
      </div>
    </section>

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

    <section class="cta-section">
      <div class="cta-content">
        <h2>جاهز لرفع مستوى موقعك وتحقيق نتائج حقيقية؟</h2>
        <p>دعني أصمّم لك Landing Page أو موقع ويب احترافي سريع، متجاوب، ومصمم لجلب الزبناء.</p>
        <a href="#form" class="cta-btn">اطلب الخدمة الآن</a>
      </div>
    </section>

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
  },
  about: {
    title: "من نحن",
    content: `<section class="about-section"><h1>من نحن</h1><p>نحن فريق متخصص في الحلول الرقمية.</p></section>`
  },
  services: {
    title: "خدماتنا",
    content: `<section class="services-section"><h1>خدماتنا</h1><ul><li>Landing Pages</li><li>Dashboards</li><li>Static Sites</li></ul></section>`
  },
  contact: {
    title: "تواصل معنا",
    content: `<section class="contact-section"><h1>تواصل معنا</h1><p>Email: contact@site.com</p></section>`
  }
};

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

window.onload = () => {
  const page = location.hash.replace("#","") || "home";
  go(page);
};

