history.scrollRestoration = "manual";

window.addEventListener("DOMContentLoaded", () => {

  window.scrollTo(0, 0);

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  const nav = document.querySelector(".nav");
  const opening = document.querySelector(".opening");

  function handleScroll() {
    const y = window.scrollY;
    nav?.classList.toggle("scrolled", y > 20);
    opening?.classList.toggle("fade-out", y > 80);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const translations = {
    en: {
      navResearch: "Research",
      navPublications: "Publications",
      navProjects: "Projects",
      navFragments: "Beyond",
      navContact: "Contact",

      openingTitle: "Let One Cloud Carry Another Forward.",
      openingSubtitle: "Passing forward the kindness I have received.",
      heroQuote1: "Research, to me, is not only about solving problems.",
      heroQuote2: "It is about carrying kindness forward.",

      eduLabel: "EDUCATION",
      eduSchool: "Nanjing University",
      eduDegree: "Bachelor of Engineering<br>Biomedical Engineering",
      eduTime: "Sep. 2024 — Jun. 2028",

      affilLabel: "AFFILIATION",
      affilLab: "Ran Wang Lab",
      affilSchool: "School of Intelligence Science and Technology<br>Nanjing University",
      affilRole: "Student Researcher · 2026 — Present",

      focusLabel: "CURRENT FOCUS",
      focusTitle: "BrainNeRF",
      focusDesc: "Physics-guided EEG Spatial Super-Resolution",
      focusNote: "Ongoing research toward robust neural field reconstruction for Brain–Computer Interfaces.",

      tag1: "AI for Healthcare",
      tag2: "Brain–Computer Interfaces",
      tag3: "Computational Neuroscience",

      photoCaption: "Outside the lab, still looking for quiet questions.",

      researchTitle: "Research Interests",

      r1Title: "AI for Healthcare",
      r1Desc: "Developing trustworthy AI methods for medical data analysis and clinical applications.",

      r2Title: "Brain–Computer Interfaces",
      r2Desc: "Exploring neural signal decoding, EEG reconstruction, and brain-inspired intelligence.",

      r3Title: "Neuroscience",
      r3Desc: "Interested in neural representation learning and computational modeling of brain activity.",

      pubTitle: "Publications",
      pubStatus: "In Preparation",
      pubWorkTitle: "EEG Spatial Super-Resolution with Neural Field Representations",
      pubDesc1: "I am currently preparing my first research work on EEG spatial reconstruction. The project studies how to recover missing EEG channels from sparse electrode observations using neural field representations, temporal basis modeling, and physics-guided constraints.",
      pubDesc2: "The motivation behind this work is simple: if we can reconstruct more complete brain activity from fewer electrodes, future brain-computer interfaces may become lighter, more accessible, and easier to use in real-world settings.",
      pubNote: "More details will be added when the work becomes ready for public release.",

      projectsTitle: "Projects",
      projectsIntro: "Every project started with a question I couldn’t answer. Some still don’t have answers — but the process of working through them changed how I understand the problem.",

      p1Tag: "EEG · BCI",
      p1Title: "BrainNeRF",
      p1Desc: "A real BCI that people actually use can’t require a dense cap full of electrodes. Portable means fewer electrodes — but fewer electrodes means less signal. How do you resolve that?",
      p1Desc2: "I explored neural field representations to model brain activity as a continuous spatial-temporal field, and tried to reconstruct high-density EEG signals from sparse electrode observations — rather than treating the brain as a set of discrete sensor readings.",
      p1Desc3: "ML-generated EEG reconstruction is often a black box: it works, but nobody knows why. What we’re building is physically grounded — interpretable, verifiable, and trustworthy enough for a clinical setting.",

      p2Tag: "Healthcare AI",
      p2Title: "Alzheimer’s Disease Early Diagnosis",
      p2Desc: "Existing early screening methods for Alzheimer’s almost always require expensive equipment like MRI. Is there a lower-barrier combination of signals that could detect abnormalities even earlier?",
      p2Desc2: "I worked on preprocessing and cross-modal alignment of clinical data from EEG, MRI, and olfactory-related signals — trying to put signals from different sources into a shared framework for comparison and fusion.",
      p2Desc3: `Olfactory signals turned out to have far more diagnostic value than I expected — olfactory decline often precedes cognitive symptoms. That made me rethink how much weight we give to "low-tech" physiological signals in medical AI.`,

      p3Tag: "Biomedical Materials · Flexible Sensing",
      p3Title: "Conductive Hydrogel",
      p3Desc: "Is the electrode material itself the bottleneck in EEG acquisition? Conductive hydrogels are soft, skin-conforming, and theoretically better suited for long-term wear — but could they actually capture brain signals?",
      p3Desc2: "I studied the fabrication process for hydrogels and examined their properties across conductivity, biocompatibility, and mechanical behavior — along with where they actually reach their limits in sensor applications.",
      p3Desc3: `Capturing a good signal is just the first step. Getting that signal from skin into the brain — stably, over time — is an entirely different problem. The material solves contact. Connection is still far away.`,

      labelProblem: "Problem",
      labelAttempt: "Attempt",
      labelLearned: "Learned",

      fragmentsTitle: "Beyond Research",
      fragmentsIntro: "Some quiet things that happen outside the lab — the kind that are hard to put in a CV but easy to carry everywhere.",

      readingLabel: "Reading",
      readingTitle: "Being and Time",
      readingDesc: "Heidegger didn't ask what life is — he asked what it means to exist. Being-toward-death: not an ending, but the thing that makes the present real. Dense reading, but certain passages stop you cold.",
      readingNote: "— Martin Heidegger",

      walkingLabel: "A Habit",
      walkingTitle: "Thinking on Foot",
      walkingDesc: "Headphones in, then out the door — no destination. The mind starts turning on its own. Not forced thinking, but the kind where you suddenly understand something mid-stride. Not sure if it's the music, or the walking, or just leaving the chair.",

      musicLabel: "Listening",
      musicTitle: "One Person Playing for Themselves",
      musicDesc: "Glenn Gould · Martha Argerich · Keith Jarrett",
      musicNote: "Solo piano has a strange intimacy — like overhearing someone's inner monologue. Good for late nights, papers, or sitting with an unresolved question.",

      logHeading: "— Fragments",

      log1Tag: "Cycling · Zhongshan · 6 a.m.",
      log1Text: "A weekday morning, no one else around. Just tall plane trees and birds. I didn't plan to go early — it turned out to be the only time the mountain belonged to nobody.",

      log2Tag: "Hiking · Purple Mountain · Dawn",
      log2Text: "We climbed through the night with friends. At the top it was cold, but we watched the sun come up anyway. That kind of awake-happy is hard to find any other way.",

      log3Tag: "Auditing · Other Departments",
      log3Text: "I sit in on courses outside my major — Chinese and world literature, history of world religions, international relations. I'm not sure what they have to do with my research. Maybe nothing. Maybe everything.",

      log4Tag: "Walking · Late Night",
      log4Text: "Arnalds on repeat. My head was somewhere completely else — a city I invented, a person I'll never meet. Walked for two hours without noticing.",

      log5Tag: "Reading · Schrödinger",
      log5Text: "He said that life resists entropy. That felt important, though I couldn't fully say why. Still thinking about it.",

      endingText: "If one day,<br>my research can help someone speak again,<br>or help a family discover disease earlier,<br>then all the slow nights,<br>the uncertainty, and the repeated attempts<br>will have their own meaning.",
      endingSign: "— Let one cloud move another",

      button: "中文"
    },

    zh: {
      navResearch: "研究",
      navPublications: "论文",
      navProjects: "项目",
      navFragments: "科研之外",
      navContact: "联系",

      openingTitle: "让一朵云推动另一朵云。",
      openingSubtitle: "把我收到过的温暖，通过研究继续传递。",
      heroQuote1: "对我来说，科研不只是解决问题。",
      heroQuote2: "它也是把善意继续传递下去的一种方式。",

      eduLabel: "教育经历",
      eduSchool: "南京大学",
      eduDegree: "工学学士<br>生物医学工程",
      eduTime: "2024.09 — 2028.06",

      affilLabel: "所在实验室",
      affilLab: "王冉实验室",
      affilSchool: "智能科学与技术学院<br>南京大学",
      affilRole: "Student Researcher · 2026 — 至今",

      focusLabel: "当前关注",
      focusTitle: "BrainNeRF",
      focusDesc: "物理引导 EEG 空间超分辨率",
      focusNote: "面向脑机接口的鲁棒神经场重建研究。",

      tag1: "医疗人工智能",
      tag2: "脑机接口",
      tag3: "计算神经科学",

      photoCaption: "实验室之外，也在寻找安静的问题。",

      researchTitle: "研究兴趣",

      r1Title: "医疗人工智能",
      r1Desc: "关注医学数据分析、可信医疗 AI 与临床智能应用。",

      r2Title: "脑机接口",
      r2Desc: "关注脑电信号重建、神经解码与脑启发智能。",

      r3Title: "计算神经科学",
      r3Desc: "关注脑活动建模、神经场表示学习与计算神经科学。",

      pubTitle: "论文",
      pubStatus: "正在准备中",
      pubWorkTitle: "基于神经场表示的 EEG 空间超分辨率重建",
      pubDesc1: "我正在准备第一项研究工作，主题是 EEG 空间重建：从稀疏电极观测中恢复缺失脑电通道。这个项目尝试结合神经场表示、时间基建模与物理约束，让模型从有限观测中重建更完整的脑活动信号。",
      pubDesc2: "这个问题背后有一个很现实的动机：如果我们能够用更少的电极重建更完整的脑活动，未来的脑机接口也许可以变得更轻便、更可及，也更容易进入真实使用场景。",
      pubNote: "当研究结果更加完整、适合公开展示时，我会在这里更新更多细节。",

      projectsTitle: "项目",
      projectsIntro: "每个项目都从一个我答不上来的问题开始。有些问题现在还没答案，但做的过程本身改变了我对这件事的理解。",

      p1Tag: "EEG · 脑机接口",
      p1Title: "BrainNeRF",
      p1Desc: "未来真正能落地的脑机接口，不可能要求用户戴着密密麻麻的电极帽。便携意味着电极少，但电极少意味着信号不够——这个矛盾怎么解？",
      p1Desc2: "用神经场对脑活动的时空分布建模，同时探索在稀疏电极条件下重建高密度 EEG 信号的可能性。不把脑信号看作离散采样点，而是一个连续的场。",
      p1Desc3: "机器学习生成的 EEG 重建往往是黑箱——效果好，但不知道为什么好。我们在做的方向是有物理意义的建模，这让整个研究在医疗场景里变得可信、可验证。",

      p2Tag: "医疗人工智能",
      p2Title: "阿尔茨海默病早期诊断",
      p2Desc: "早期筛查阿尔茨海默病，现有方案几乎都依赖 MRI 这类昂贵设备。有没有可能用更低门槛的信号组合，在更早的阶段发现异常？",
      p2Desc2: "对 EEG、MRI 和嗅觉相关的临床数据做预处理和跨模态对齐，尝试让不同来源的信号能够放在同一个框架里比较和融合。",
      p2Desc3: `嗅觉信号的诊断价值比我预期的高很多——嗅觉退化往往早于认知症状出现。这让我开始重新看待"低技术含量"的生理信号在医疗 AI 里的位置。`,

      p3Tag: "生物医学材料 · 柔性传感",
      p3Title: "导电水凝胶",
      p3Desc: "做脑电信号采集，电极材料本身是不是瓶颈？导电水凝胶柔软、贴合皮肤，理论上比传统硬电极更适合长期佩戴——但它真的能用来提取脑电信号吗？",
      p3Desc2: "系统学习了水凝胶的制备工艺，研究了它在导电性、生物相容性和机械性能上的特性，以及在传感器场景下的实际应用边界。",
      p3Desc3: `能用好材料采到信号，只是第一步。信号怎么从皮肤传到大脑、怎么在体内稳定传输，是完全不同维度的问题。材料解决了"接触"，但"连接"还很远。`,

      labelProblem: "问题",
      labelAttempt: "尝试",
      labelLearned: "学到的",

      fragmentsTitle: "科研之外",
      fragmentsIntro: "实验室以外发生的一些安静的事——很难写进简历，但很容易一直带着。",

      readingLabel: "阅读",
      readingTitle: "《存在与时间》",
      readingDesc: "海德格尔问的不是\"生命是什么\"，而是\"存在意味着什么\"。向死而生——死亡不是终点，而是让此刻变得真实的东西。读起来很难，但某些段落会让你停下来发很久的呆。",
      readingNote: "—— 马丁·海德格尔",

      walkingLabel: "一个习惯",
      walkingTitle: "用脚思考",
      walkingDesc: "塞上耳机，然后出门，没有目的地。脑子会自己开始转——不是刻意想什么，是那种走着走着忽然想通一件事的感觉。不知道是音乐在帮忙，还是脚步在帮忙，或者只是离开椅子这件事本身。",

      musicLabel: "音乐",
      musicTitle: "一个人弹给自己听",
      musicDesc: "Glenn Gould · Martha Argerich · Keith Jarrett",
      musicNote: "钢琴独奏有种奇怪的私密感，像在听别人的内心独白。适合深夜、读论文，或者陪着一个还没想清楚的问题。",

      logHeading: "— 碎片",

      log1Tag: "骑行 · 钟山 · 早上六点",
      log1Text: "工作日，没什么人。只有高大的梧桐树和小鸟的叫声。不是计划好的早起——只是发现那个时间，山好像是自己的。",

      log2Tag: "夜爬 · 紫金山 · 看日出",
      log2Text: "和朋友一起爬上去，等到日出的时候很冷。但看着太阳出来，那种清醒的开心，平时不容易遇见。",

      log3Tag: "旁听 · 其他院系",
      log3Text: "会去旁听中外文学史、世界宗教发展、国际关系。不太确定这些和我的研究有什么关系。也许没有，也许什么都有。",

      log4Tag: "走路 · 深夜",
      log4Text: "Arnalds 单曲循环。脑子已经在完全另一个地方——一座我编出来的城市，一个我不会遇见的人。走了两个小时没有注意到。",

      log5Tag: "阅读 · 薛定谔",
      log5Text: "他说生命在抵抗熵增。我觉得这句话很重要，但说不清楚为什么。还在想。",

      endingText: "如果有一天，<br>我的研究能够帮助一个人重新开口说话，<br>或者帮助一个家庭更早发现疾病，<br>那么，那些无数个深夜，都值得。",
      endingSign: "—— 让一朵云推动另一朵云",

      button: "EN"
    }
  };

  let currentLang = localStorage.getItem("lang") || "en";

  function replayVisibleAnimations() {
    const visibleSections = document.querySelectorAll(".reveal.visible");

    visibleSections.forEach(section => {
      section.classList.remove("visible");
    });

    requestAnimationFrame(() => {
      visibleSections.forEach(section => {
        void section.offsetWidth;
        section.classList.add("visible");
      });
    });
  }

  function replayHeroAnimation() {
    const heroItems = document.querySelectorAll(
      ".opening .small-label, .opening h1, .opening-en, .hero-quote"
    );

    heroItems.forEach(item => {
      item.style.animation = "none";
    });

    requestAnimationFrame(() => {
      heroItems.forEach(item => {
        void item.offsetWidth;
        item.style.animation = "";
      });
    });
  }

  function applyLanguage(lang) {
    document.body.classList.add("lang-switching");

    setTimeout(() => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[lang][key]) {
          el.innerHTML = translations[lang][key];
        }
      });

      const btn = document.getElementById("langToggle");
      if (btn) btn.textContent = translations[lang].button;

      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      localStorage.setItem("lang", lang);
      currentLang = lang;

      document.body.classList.remove("lang-switching");

      replayHeroAnimation();
      replayVisibleAnimations();
    }, 160);
  }

  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "zh" : "en");
  });

  applyLanguage(currentLang);

  document.addEventListener("pointermove", e => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });

});