(function () {
  "use strict";

  // The active locale
  const FALLBACK_LOCAL = "en";

  const locale = localStorage.getItem("locale")
    ? localStorage.getItem("locale")
    : FALLBACK_LOCAL;
  const langSwitch = document.querySelector("#lang");
  langSwitch.innerHTML =
    locale == "en"
      ? "<span id='flag' class='fi fi-sa'></span> AR"
      : "<span id='flag' class='fi fi-us'></span> EN";
  const translations = {
    // English translations
    en: {
      "": "",

      intiqaal: "INTIQAAL",
      home: "Home",
      about: "About Us",
      "about-content": `
            Located in Saudi Arabia, INTIQAAL is a tech company speciallized in cloud services. Working alongside with our partners, we provide high quality devops, devsecops and cloud services. Among our activities : Assessment & Discovery Consulting, Team-as-a-Service, Cloud Professional Services, Managed DevOps/DevSecOps Services, Training and Certification
            `,
      "cta-btn": "Let's discuss your next project",
      mission: "Mission",
      "mission-content": `
            At Intiqaal   we aim at accelerating the progress of digital transformation within the government and private sector (2030 Vision of KSA) as well as providing digital transformation solutions and the best practices to achieve 2030 vision. Since the creation, Intiqaal has focused on developing the digital transformation capabilities across the Kingdom by providing the high skilled engineers in continuous integration and continuous delivery and reducing the time to Go-To-Market (GTM) plan for government and privates sectors.
            `,
      guidelines: "Guidelines",
      community: "Community",
      activities: "Activities",
      "devops-act": "DevOps Services",
      "devops-act-item1": "‣ Providing certified DevOps Engineers",
      "devops-act-item2": "‣ Taking care of the CI/CD pipelines & deployment",
      "devops-act-item3":
        "‣ Working with security and privacy complies with Kingdom security best practices",
      "devops-act-item4":
        "‣ Implement monitoring practices, and  troubleshooting",
      "training-act": "Training and Certification",
      "training-act-item1": "‣ Provide cloud and DevOps training ",
      "training-act-item2": "‣ Partnership with cloud leaders",
      "training-act-item3": "‣ Provide a customized Cloud and DevOps courses",
      "training-act-item4":
        "‣ Be the leader in KSA market regarding Cloud and DevOps trainings",
      "cloud-act": "Cloud Professional Services",
      "cloud-act-item1": "‣ Google Professional Cloud Services",
      "cloud-act-item2":
        "‣ Multi-cloud, configuration, DevOps and Security consultation services",
      "cloud-act-item3": "‣ Service Level Agreement",
      "cloud-act-item4":
        "‣ Support the other organization within the group  to offer application as services",
      "teams-act": "Team-as-a-Service",
      "teams-act-item1":
        "‣ Offer highly and skilled engineers with good experience",
      "teams-act-item2":
        "‣ Different profiles available :IT Architects , DevOps Engineers , Software & Infrastructure Engineers",
      "teams-act-item3":
        "‣ Take over the leadership role to help Organization to move forward",
      "act-content":
        "At Intiqaal we provide our customers with a variety of services in different sectors to ensure the quality of work and the continuos support",
      partners: "Experts",
      "partners-content":
        "Hire leading experts from top-notch software developer companies",
      contact: "Contact Us",
      "cta-heading": "Welcome to INTIQAAL",
      "cta-text": "Your partner to digital transformation",
      "we-analyze": "WE DO ANALYZE",
      "we-design": "WE DO DESIGN",
      "we-provide": "WE DO PROVIDE",
      "we-analyze-content": "We understand your needs.",
      "we-design-content":
        "We create the most appropriate and cost- effective solution with engineering.",
      "we-provide-content": "We deliver and execute  the turnkey solution.",
      "send-msg": "Send A Message",
      send: "Send",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Message",
      "markets-heading": "Target Markets",
      "markets-content": `Top potential markets for which our services are oriented`,
      "market-item1": "Government",
      "market-item2": "Oil & Gas sector",
      "market-item3": "Financial Institutions",
      "market-item4": "SMB and Software companies",
      techstack: "Technologies",
      "techstack-content":
        "Our team of experts is equipped with necessary technologies for the different challenges",
      "devops-content": `Increase the efficiency of your technology and business processes with Intiqaal's professional DevOps engineers`,
      "ci-cd": "CI / CD",
      "ci-cd-content": `Intiqaal's DevOps expert talent pool can significantly accelerate the software delivery
            and deployment process of your business`,
      "devops-skills": `Top DevOps Competences`,
      "devops-skills-content": `Our team of DevOps engineers is characterized by high qualifications and experience in the areas of technology and process management.`,
      "devops-experience": `Large Experience`,
      "devops-experience-content": `We plan to use our experience in supporting ambitious DevOps initiatives for many
            companies across a variety of industries.`,
      "learn-more": `Learn More`,
      "devops-prev": `Priviliges of Adopting DevOps`,
      "devops-prev-content": `The practice of DevOps encourages smoother, continuous communication, collaboration, integration, visibility, and transparency between application development teams (Dev) and their IT operations team (Ops) counterparts.`,
      "devops-discuss": `Let's Discuss Your requirements`,
      "devops-right1": `Faster software development cycle`,
      "devops-right1-content": `The faster development cycle ensures that the deployment of the product is accelerated while also ensuring faster correction  of errors and bugs`,
      "devops-right2": `Continuous releases and deployments`,
      "devops-right2-content": `Following the continuous integration and continuous delivery approach of DevOps, the actual deployment of the software speeds up considerablys`,
      "devops-right3": `Improved customer experience and consumer satisfaction`,
      "devops-right3-content": `DevOps team can better serve the customers, incorporate the customer feedback in the future product iterations faster, leading to increased customer satisfaction`,
      "devops-right4": `Early defect detection leading to quality software development`,
      "devops-right4-content": `DevOps facilitates early detection of defects in the code and their subsequent resolution at a significantly faster rate, resulting in improvement in the overall quality of software`,
      rights: "All Rights Reserved",
    },
    // Arabic translations
    ar: {
      intiqaal: "إنتقال",
      home: "الرئيسية",
      about: "من نحن",
      "about-content": `
             .إننقال هي شركة تقنية تقع في المملكة العربية السعودية متخصصة في الخدمات السحابية. من خلال العمل جنبًا إلى جنب مع شركائنا، نقدم خدمات سحابية عالية الجودة. من بين أنشطتنا : استشارات التقييم والاكتشاف ,فريق كخدمة, خدمات سحابية محترفة, خدمات ديفوبس منظمة , تدريبات وشهائد`,
      mission: "هدفنا",
      "cta-btn": "فلنناقش مشروعك القادم",
      "mission-content": ` في إنتقال ، نهدف إلى تسريع تقدم التحول الرقمي في القطاعين الحكومي والخاص (رؤية المملكة العربية السعودية 2030) بالإضافة إلى توفير حلول التحول الرقمي وأفضل الممارسات لتحقيق رؤية 2030. منذ إنشائها ، ركزت إنتقال على بناء كفائات التحول الرقمي
            في المملكة من خلال توفير مهندسين ذوي مهارات عالية`,
      guidelines: "قواعدنا",
      community: "المجتمع",
      activities: "أنشطة",
      "devops-act": "DevOps خدمات",
      "devops-act-item1": "DevOps        •توفير مهندسين معتمدين في ",
      "devops-act-item2": "CI/CD الاهتمام بخطط ",
      "devops-act-item3":
        "العمل بأمان وخصوصية يتوافق مع أفضل ممارسات أمان المملكة",
      "devops-act-item4": "تنفيذ ممارسات المراقبة ، واستكشاف الأخطاء وإصلاحها",
      "training-act": "التدريب والشهادة",
      "training-act-item1": "DevOpsتوفير تدريبات في التقنيات السحابية و ",
      "training-act-item2": "شراكة مع عمالقة التقنيات السحابية",
      "training-act-item3": "توفير دورات متخصصة في التقنيات السحابية",
      "training-act-item4":
        "أن نصبح الرائد في سوق المملكة العربية السعودية فيما يتعلق بالتدريبات على التكنولوجيا السحابية ",
      "cloud-act": "خدمات سحابة احترافية",
      "cloud-act-item1": "Google خدمات سحابية احترافية من",
      "cloud-act-item2": "متعدد السحابة , اعدادات, خدمات استشارية",
      "cloud-act-item3": "اتفاقية مستوى الخدمة",
      "cloud-act-item4":
        "دعم المنظمات الأخرى داخل المجموعة لتقديم التطبيقات كخدمات",
      "teams-act": "فريق كخدمة",
      "teams-act-item1": "تقديم مهندسين ذوي مهارات عالية وخبرة جيدة",
      "teams-act-item2":
        " عدة كفائات : مهندسو معلوماتية, مهندسو بنية تحتية و مهندسو تقنيات سحابية",
      "teams-act-item3": "تولي الدور القيادي لمساعدة المنظمة على المضي قدمًا",
      "act-content":
        "في انتقال نقدم لعملائنا مجموعة متنوعة من الخدمات في مختلف القطاعات لضمان جودة العمل والدعم المستمر",
      partners: "خبرات",
      "partners-content":
        "استعن بخبراء رائدين من شركات تطوير برمجيات من الدرجة الأولى",
      contact: "تواصل معنا",
      "cta-heading": "مرحبا بك في إنتقال",
      "cta-text": "رفيقك نحو التحول الرقمي",
      "we-analyze": "نقوم بالتحليل",
      "we-design": "نقوم بالتصميم",
      "we-provide": "نقوم بالتوفير",
      "we-analyze-content": "نحن نتفهم احتياجاتك",
      "we-design-content":
        "نحن نخلق الحل الأنسب والأكثر فعالية من حيث التكلفة مع الهندسة",
      "we-provide-content": "نحن نقدم وننفذ الحل الجاهز",
      "send-msg": "راسلنا من هنا",
      send: "إرسال",
      name: "الاسم",
      email: "البريد الالكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      "markets-heading": "الأسواق المستهدفة",
      "markets-content": "أهم الأسواق التي تتوجه لها خدماتنا",
      "market-item1": "الحكومة",
      "market-item2": "قطاع النفط والغاز",
      "market-item3": "المؤسسات المالية",
      "market-item4": "الشركات الصغيرة والمتوسطة وشركات البرمجيات",
      techstack: "التقنيات",
      "techstack-content":
        "فريق الخبراء لدينا مجهز بالتكنولوجيا اللازمة لمواجهة مختلف التحديات",
      "devops-content": `قم بزيادة كفاءة تقنياتك وعملياتك التجارية مع مهندسين  محترفين في انتقال`,
      "ci-cd": `النشر المستمر/التكامل المستمر`,
      "ci-cd-content": `يمكن لخبرائنا في انتقال تسريع عملية تسليم البرامج ونشرها في عملك بشكل كبير.`,
      "devops-skills": `أعلى الكفاءات`,
      "devops-skills-content": `يتميز فريق المهندسين لدينا بمؤهلات وخبرات عالية في مجالات التكنولوجيا وإدارة العمليات.`,
      "devops-experience": `خبرة واسعة`,
      "devops-experience-content": `نخطط لاستخدام خبرتنا في دعم المبادرات الطموحة للعديد من الشركات عبر مجموعة متنوعة من الصناعات`,
      "learn-more": `اعرف المزيد`,
      "devops-prev": `DevOps امتيازات اعتماد `,
      "devops-prev-content": `تشجع على التواصل والتعاون والتكامل والرؤية والشفافية بشكل أكثر سلاسة واستمرارية بين فرق تطوير التطبيقات  ونظرائهم في فريق عمليات تكنولوجيا المعلومات .`,
      "devops-discuss": `دعنا نناقش متطلباتك`,
      "devops-right1": `دورة تطوير برامج أسرع`,
      "devops-right1-content": `تضمن دورة التطوير الأسرع تسريع نشر المنتج مع ضمان تصحيح الأخطاء والمشاكل بشكل أسرع`,
      "devops-right2": `عمليات الانتاج والنشر المستمرة`,
      "devops-right2-content": `باتباع نهج التكامل المستمر والتسليم المستمر ، يسرع النشر الفعلي للبرنامج بشكل كبير`,
      "devops-right3": `تحسين تجربة العملاء ورضا المستهلك`,
      "devops-right3-content": `يمكن للفرق خدمة العملاء بشكل أفضل ، ودمج ملاحظات العملاء في تكرارات المنتج المستقبلية بشكل أسرع ، مما يؤدي إلى زيادة رضا العملاء`,
      "devops-right4": `الاكتشاف المبكر للعيوب مما يؤدي إلى تطوير برامج عالية الجودة`,
      "devops-right4-content": `يسهل الاكتشاف المبكر للعيوب في الكود وحلها اللاحق بمعدل أسرع بكثير ، مما يؤدي إلى تحسين الجودة الشاملة للبرنامج`,
      rights: "كل الحقوق محفوظة",
    },
  };
  let elements = [
    "p",
    "section",
    "#navbar ul li:not(.exception) a",
    "h2:not(#welcome, .section-heading, .section-title h2)",
    "span:not(#lang,.activities-items .act-item span, #flag, footer span)",
<<<<<<< HEAD
=======
    ".right-item p",
>>>>>>> aaeab3f (Translte new sections)
  ];
  // When the page content is ready...
  document.addEventListener("DOMContentLoaded", () => {
    let hijri = new Intl.DateTimeFormat("en-SA-u-ca-islamic", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());
    let miladi = new Intl.DateTimeFormat("en-SA-u-ca", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(Date.now());
    let hijriAr = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());
    let miladiAr = new Intl.DateTimeFormat("ar-TN-u-ca", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(Date.now());

    document.querySelector("#dynamic-date").innerText =
      localStorage.getItem("locale") === "en"
        ? `${hijri} / ${miladi}`
        : `${hijriAr} / ${miladiAr}`;
    // document.querySelector('#dynamic-date').style.fontWeight = localStorage.getItem('locale') == 'ar' ? 600 : 600

    document
      // Find all elements that have the key attribute
      .querySelectorAll("[data-i18n-key]")
      .forEach(translateElement);

    document.getElementById("message").innerText = "";

    if (localStorage.getItem("locale") === "ar") {
      document.querySelector(".navbar ul").style.flexDirection = "row-reverse";
      document.querySelector(".navbar ul").style.marginLeft = 0;
      document.querySelector("#dark").style.marginRight = "5rem";
      document.querySelector("#up-header img").style.marginRight = "1rem";
      document.querySelector("#up-header img").style.marginLeft = "1rem   ";
      document.querySelector("#up-header").style.flexDirection = "row-reverse";
      document.querySelector("#nav-wrapper").style.flexDirection =
        "row-reverse";
      document.querySelector("#nav-wrapper").style.justifyContent =
        "space-between";
      // document.querySelector('.activities-items .act-item ul li').style.listStyle = "none"
      Array.prototype.forEach.call(
        document.querySelectorAll(".activities-items .act-item ul li"),
        (el) => {
          el.style.textAlign = "right";
        }
      );

      Array.prototype.forEach.call(
        document.querySelectorAll(".right-item"),
        (el) => {
          el.style.textAlign = "right";

          el.style.alignItems = "flex-end";
        }
      );

      elements.forEach((el) => {
        Array.prototype.forEach.call(document.querySelectorAll(el), (tag) => {
          // console.log(el);
          if (el == "#navbar ul li:not(.exception) a") {
            tag.style.fontSize = "1rem";
            tag.style.fontFamily = "var(--text-Regular)";
          } else if (tag.id == "welcomep") {
            tag.style.fontSize = "28px";
            tag.style.fontFamily = "var(--text-medium)";
          } else if (tag.id == "send-us-msg") {
            tag.style.fontSize = "36px";
            tag.style.fontFamily = "var(--text-medium)";
          } else if (el == ".right-item p") {
            tag.style.fontFamily = "var(--text-light)";
          } else {
            tag.style.fontSize = "1.2rem";

            tag.style.lineHeight = "2rem";
            tag.style.fontFamily = "var(--text-regular)";
          }
        });
      });
    }
  });

  for (let input of ["name", "email", "subject", "message"]) {
    document.querySelector(`#${input}`).style.textAlign =
      localStorage.getItem("locale") == "ar" ? "right" : "left";
    document.querySelector(`#${input}`).placeholder =
      localStorage.getItem("locale") == "ar"
        ? translations["ar"][input]
        : document.querySelector(`#${input}`).placeholder;
  }
  function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[locale][key];
    element.innerText = translation;
  }

  langSwitch.parentElement.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    localStorage.setItem(
      "locale",
      langSwitch.innerText.includes("EN") ? "en" : "ar"
    );

    langSwitch.innerHTML =
      localStorage.getItem("locale") == "en"
        ? "<span id='flag' class='fi fi-sa'></span> AR"
        : "<span id='flag' class='fi fi-us'></span> EN";
    window.location.reload();
  });
  Array.prototype.forEach.call(
    document.querySelectorAll("section p"),
    (child) => {
      if (localStorage.getItem("locale") === "ar") {
        child.style.textAlign = "right";
      }
      // else {
      //     child.style.textAlign = 'left'
      // }
    }
  );
  Array.prototype.forEach.call(
    document.querySelectorAll(".why-us .icon-box"),
    (el) => {
      if (localStorage.getItem("locale") === "ar") {
        el.style.textAlign = "right";
        el.style.justifyContent = "space-between";
      }
    }
  );

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //     const toggleBacktotop = () => {
  //         if (window.scrollY > 100) {
  //             backtotop.classList.add('active')
  //         } else {
  //             backtotop.classList.remove('active')
  //         }
  //     }
  //     window.addEventListener('load', toggleBacktotop)
  //     onscroll(document, toggleBacktotop)
  // }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");

    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Skills animation
   */
  // let skilsContent = select('.skills-content');
  // if (skilsContent) {
  //     new Waypoint({
  //         element: skilsContent,
  //         offset: '80%',
  //         handler: function (direction) {
  //             let progress = select('.progress .progress-bar', true);
  //             progress.forEach((el) => {
  //                 el.style.width = el.getAttribute('aria-valuenow') + '%'
  //             });
  //         }
  //     })
  // }

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-carousel', {
  //     speed: 400,
  //     loop: true,
  //     autoplay: {
  //         delay: 5000,
  //         disableOnInteraction: false
  //     },
  //     pagination: {
  //         el: '.swiper-pagination',
  //         type: 'bullets',
  //         clickable: true
  //     }
  // });

  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //     let portfolioContainer = select('.portfolio-container');
  //     if (portfolioContainer) {
  //         let portfolioIsotope = new Isotope(portfolioContainer, {
  //             itemSelector: '.portfolio-wrap',
  //             layoutMode: 'fitRows'
  //         });

  //         let portfolioFilters = select('#portfolio-flters li', true);

  //         on('click', '#portfolio-flters li', function (e) {
  //             e.preventDefault();
  //             portfolioFilters.forEach(function (el) {
  //                 el.classList.remove('filter-active');
  //             });
  //             this.classList.add('filter-active');

  //             portfolioIsotope.arrange({
  //                 filter: this.getAttribute('data-filter')
  //             });
  //             portfolioIsotope.on('arrangeComplete', function () {
  //                 AOS.refresh()
  //             });
  //         }, true);
  //     }

  // });

  /**
   * Initiate portfolio lightbox
   */
  // const portfolioLightbox = GLightbox({
  //     selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //     speed: 400,
  //     autoplay: {
  //         delay: 5000,
  //         disableOnInteraction: false
  //     },
  //     pagination: {
  //         el: '.swiper-pagination',
  //         type: 'bullets',
  //         clickable: true
  //     }
  // });

  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
  //     AOS.init({
  //         duration: 1000,
  //         easing: "ease-in-out",
  //         once: true,
  //         mirror: false
  //     });
  // });

  /**
   * Initiate Pure Counter
   */
  // new PureCounter();

  // DOM Elements
})();
