history.scrollRestoration = "manual";

window.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // safe DOM refs
  // -----------------------------
  const nav = document.querySelector(".nav");
  const opening = document.querySelector(".opening");

  window.scrollTo(0, 0);

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  // -----------------------------
  // scroll handler (safe)
  // -----------------------------
  function handleScroll() {
    const y = window.scrollY || 0;
    nav?.classList.toggle("scrolled", y > 20);
    opening?.classList.toggle("fade-out", y > 200);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // -----------------------------
  // SAFE IntersectionObserver
  // -----------------------------
  let observer = null;

  if ("IntersectionObserver" in window) {
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.05 });
    } catch (e) {
      observer = null;
    }
  }

  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach(el => {
    observer?.observe(el);
  });

  // -----------------------------
  // language system
  // -----------------------------
  const translations = window.translations || {}; // fallback safety

  let currentLang = "en";

  function applyLanguage(lang, isInit = false) {

    document.body.classList.add("lang-switching");

    setTimeout(() => {

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations?.[lang]?.[key];

        if (value !== undefined) {
          el.innerHTML = value;
        }
      });

      const btn = document.getElementById("langToggle");
      if (btn && translations?.[lang]?.button) {
        btn.textContent = translations[lang].button;
      }

      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

      currentLang = lang;

      // Remove switching class after content update, let CSS fade back in
      requestAnimationFrame(() => {
        document.body.classList.remove("lang-switching");
        if (!isInit) {
          replayHeroAnimation();
          replayVisibleAnimations();
        }
      });

    }, 150);
  }

  // -----------------------------
  // animation replay safe
  // -----------------------------
  function replayVisibleAnimations() {
    const visibleSections = document.querySelectorAll(".reveal.visible");

    visibleSections.forEach(s => {
      s.classList.remove("visible");
      void s.offsetWidth; // force reflow so transition re-triggers
    });

    requestAnimationFrame(() => {
      visibleSections.forEach(s => s.classList.add("visible"));
    });
  }

  function replayHeroAnimation() {
    const heroItems = document.querySelectorAll(
      ".opening .small-label, .opening h1, .opening-en, .hero-quote"
    );

    heroItems.forEach(i => i.style.animation = "none");

    requestAnimationFrame(() => {
      heroItems.forEach(i => {
        void i.offsetWidth;
        i.style.animation = "";
      });
    });
  }

  // -----------------------------
  // bind button safely
  // -----------------------------
  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "zh" : "en");
    });
  }

  // init
  if (Object.keys(translations).length > 0) {
    applyLanguage(currentLang, true);
  }

  // cursor effect safe
  document.addEventListener("pointermove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });

});