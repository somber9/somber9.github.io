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
  let scrollFrame = 0;

  function updateScrollState() {
    const y = window.scrollY || 0;
    nav?.classList.toggle("scrolled", y > 20);
    opening?.classList.toggle("fade-out", y > 200);
    scrollFrame = 0;
  }

  function handleScroll() {
    if (!scrollFrame) {
      scrollFrame = window.requestAnimationFrame(updateScrollState);
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateScrollState();

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
    if (observer) {
      observer.observe(el);
    } else {
      el.classList.add("visible");
    }
  });

  // -----------------------------
  // language system
  // -----------------------------
  const translations = window.translations || {}; // fallback safety

  const supportedLanguages = ["en", "zh", "mn"];
  let currentLang = "en";
  window.localStorage?.removeItem("site-language");

  function formatMongolianTranslation(value) {
    return value
      .split(/(<[^>]+>)/g)
      .map(part => {
        if (part.startsWith("<")) return part;
        return part.replace(
          /[A-Za-z][A-Za-z0-9]*(?:[-–—][A-Za-z0-9]+)*(?:\s+[A-Za-z][A-Za-z0-9]*(?:[-–—][A-Za-z0-9]+)*)*/g,
          match => `<span class="latin-term">${match}</span>`
        );
      })
      .join("");
  }

  function applyLanguage(lang, isInit = false) {

    document.body.classList.add("lang-switching");

    setTimeout(() => {

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations?.[lang]?.[key];

        if (value !== undefined) {
          el.innerHTML = lang === "mn" ? formatMongolianTranslation(value) : value;
          const text = el.textContent.trim();
          const isLatinOnly = lang === "mn" && /[A-Za-z]/.test(text) && !/[\u1800-\u18AF]/.test(text);
          el.classList.toggle("latin-only", isLatinOnly);
        }
      });

      document.querySelectorAll("[data-lang]").forEach(button => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "mn" ? "mn-Mong" : "en";
      document.body.classList.toggle("lang-mn", lang === "mn");
      document.body.dataset.language = lang;

      currentLang = lang;

      // Remove switching class after content update, let CSS fade back in
      requestAnimationFrame(() => {
        document.body.classList.remove("lang-switching");
        if (!isInit) {
          window.scrollTo({ top: 0, behavior: "smooth" });
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
      ".opening h1, .hero-quote"
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
  // bind language options safely
  // -----------------------------
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (supportedLanguages.includes(nextLanguage) && nextLanguage !== currentLang) {
        applyLanguage(nextLanguage);
      }
    });
  });

  const brand = document.querySelector(".brand");
  brand?.addEventListener("click", event => {
    event.preventDefault();
    history.replaceState(null, "", "#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // init
  if (Object.keys(translations).length > 0) {
    applyLanguage(currentLang, true);
  }

  // cursor effect safe
  let pointerFrame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  const fragmentsSection = document.querySelector("#fragments");

  document.addEventListener("pointermove", (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;

    if (!pointerFrame) {
      pointerFrame = window.requestAnimationFrame(() => {
        document.body.style.setProperty("--x", pointerX + "px");
        document.body.style.setProperty("--y", pointerY + "px");

        if (fragmentsSection) {
          const rect = fragmentsSection.getBoundingClientRect();
          const isNearFragments = pointerY >= rect.top && pointerY <= rect.bottom;

          if (isNearFragments) {
            const offsetX = ((pointerX - rect.left) / Math.max(rect.width, 1) - .5) * 10;
            const offsetY = ((pointerY - rect.top) / Math.max(rect.height, 1) - .5) * 8;
            fragmentsSection.style.setProperty("--fragment-x", `${offsetX.toFixed(2)}px`);
            fragmentsSection.style.setProperty("--fragment-y", `${offsetY.toFixed(2)}px`);
          }
        }

        pointerFrame = 0;
      });
    }
  }, { passive: true });

  fragmentsSection?.addEventListener("pointerleave", () => {
    fragmentsSection.style.setProperty("--fragment-x", "0px");
    fragmentsSection.style.setProperty("--fragment-y", "0px");
  }, { passive: true });

  // Mongolian khata — softly follows pointer movement
  const khata = document.querySelector(".khata-follower");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (khata && !reducedMotion) {
    let targetX = window.innerWidth * .72;
    let targetY = window.innerHeight * .32;
    let currentX = targetX;
    let currentY = targetY;
    let currentAngle = -8;

    document.addEventListener("pointermove", event => {
      targetX = Math.max(12, Math.min(window.innerWidth - 230, event.clientX + 24));
      targetY = Math.max(12, Math.min(window.innerHeight - 112, event.clientY + 20));
    }, { passive: true });

    const animateKhata = () => {
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;

      currentX += deltaX * .075;
      currentY += deltaY * .075;

      const targetAngle = Math.max(-18, Math.min(18, deltaY * .12));
      currentAngle += (targetAngle - currentAngle) * .08;

      khata.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentAngle}deg)`;
      requestAnimationFrame(animateKhata);
    };

    requestAnimationFrame(animateKhata);
  }

});
