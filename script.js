history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
});

const nav = document.querySelector(".nav");
const opening = document.querySelector(".opening");

function handleScroll(){
  const y = window.scrollY;
  nav?.classList.toggle("scrolled", y > 20);
  opening?.classList.toggle("fade-out", y > 80);
}

window.addEventListener("scroll", handleScroll);
handleScroll();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.18});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const translations = {
  en:{
    navResearch:"Research",
    navPublications:"Publications",
    navProjects:"Projects",
    navFragments:"Beyond",
    navContact:"Contact",

    openingTitle:"Let One Cloud Carry Another Forward.",
    openingSubtitle:"Passing forward the kindness I have received.",
    heroQuote1:"Research, to me, is not only about solving problems.",
    heroQuote2:"It is about carrying kindness forward.",

    eduLabel:"EDUCATION",
    eduSchool:"Nanjing University",
    eduDegree:"Bachelor of Engineering<br>Biomedical Engineering",
    eduTime:"Sep. 2024 — Jun. 2028",

    affilLabel:"AFFILIATION",
    affilLab:"Ran Wang Lab",
    affilSchool:"School of Intelligence Science and Technology<br>Nanjing University",
    affilRole:"Student Researcher · 2026 — Present",

    focusLabel:"CURRENT FOCUS",
    focusTitle:"BrainNeRF",
    focusDesc:"Physics-guided EEG Spatial Super-Resolution",
    focusNote:"Ongoing research toward robust neural field reconstruction for Brain–Computer Interfaces.",

    tag1:"AI for Healthcare",
    tag2:"Brain–Computer Interfaces",
    tag3:"Computational Neuroscience",

    photoCaption:"Outside the lab, still looking for quiet questions.",

    researchTitle:"Research Interests",

    r1Title:"AI for Healthcare",
    r1Desc:"Developing trustworthy AI methods for medical data analysis and clinical applications.",

    r2Title:"Brain–Computer Interfaces",
    r2Desc:"Exploring neural signal decoding, EEG reconstruction, and brain-inspired intelligence.",

    r3Title:"Neuroscience",
    r3Desc:"Interested in neural representation learning and computational modeling of brain activity.",

    pubTitle:"Publications",
    pubStatus:"In Preparation",
    pubWorkTitle:"EEG Spatial Super-Resolution with Neural Field Representations",
    pubDesc1:"I am currently preparing my first research work on EEG spatial reconstruction. The project studies how to recover missing EEG channels from sparse electrode observations using neural field representations, temporal basis modeling, and physics-guided constraints.",
    pubDesc2:"The motivation behind this work is simple: if we can reconstruct more complete brain activity from fewer electrodes, future brain-computer interfaces may become lighter, more accessible, and easier to use in real-world settings.",
    pubNote:"More details will be added when the work becomes ready for public release.",

    projectsTitle:"Projects",
    projectsIntro:"A few research directions and early explorations that shape how I think about artificial intelligence, biomedical engineering, and human-centered technology.",

    p1Tag:"Current Research · EEG · BCI",
    p1Title:"BrainNeRF",
    p1Desc:"My current research project focuses on EEG spatial super-resolution: reconstructing missing brain signals from sparse electrode recordings.",
    p1Desc2:"I am exploring whether neural field representations and temporal basis modeling can help describe brain activity beyond fixed electrode positions. Instead of treating EEG only as signals recorded at separate sensors, this project tries to model brain activity as a more continuous spatial-temporal field.",
    p1Desc3:"The long-term motivation is to reduce the dependence on dense and inconvenient EEG acquisition, while still preserving useful neural information for brain-computer interfaces.",

    p2Tag:"Exploration · Healthcare AI",
    p2Title:"Alzheimer’s Disease Analysis",
    p2Desc:"An exploratory direction on multimodal analysis for early disease screening, including EEG, MRI, and olfactory-related signals.",
    p2Desc2:"This project reflects my interest in medical AI that does not only chase accuracy numbers, but also tries to support earlier detection, better clinical understanding, and more humane healthcare.",
    p2Desc3:"I am especially interested in how different types of biomedical signals may complement each other when a single modality is noisy, incomplete, or difficult to interpret.",

    p3Tag:"Biomedical Materials · Flexible Sensing",
    p3Title:"Conductive Hydrogel",
    p3Desc:"A biomedical materials exploration related to conductive hydrogels, flexible sensing, and healthcare applications.",
    p3Desc2:"It helped me understand that future biomedical systems are not only about algorithms. They also depend on sensors, materials, hardware, and the way technology touches the human body.",
    p3Desc3:"This experience also made me more interested in the connection between physical devices and intelligent models in real healthcare scenarios.",

    fragmentsTitle:"Beyond Research",
    fragmentsIntro:"Some quiet things that happen outside the lab — the kind that are hard to put in a CV but easy to carry everywhere.",

    readingLabel:"Reading",
    readingTitle:"What Is Life?",
    readingDesc:"Schrödinger asked if physics could explain life. I still don't have an answer, but the question hasn't left me.",
    readingNote:"— Erwin Schrödinger",

    walkingLabel:"A Habit",
    walkingTitle:"Music + Walking",
    walkingDesc:"I put on instrumental music and walk without a destination. My brain automatically starts writing a story. I don't know when this started.",

    musicLabel:"Listening",
    musicTitle:"Quiet Night Music",
    musicDesc:"Joe Hisaishi · Ryuichi Sakamoto · Ólafur Arnalds",
    musicNote:"For walking alone, reading papers, or sitting with an unfinished idea.",

    logHeading:"— Fragments",

    log1Tag:"Cycling · Zhongshan · 6 a.m.",
    log1Text:"A weekday morning, no one else around. Just tall plane trees and birds. I didn't plan to go early — it turned out to be the only time the mountain belonged to nobody.",

    log2Tag:"Hiking · Purple Mountain · Dawn",
    log2Text:"We climbed through the night with friends. At the top it was cold, but we watched the sun come up anyway. That kind of awake-happy is hard to find any other way.",

    log3Tag:"Auditing · Other Departments",
    log3Text:"I sit in on courses outside my major — Chinese and world literature, history of world religions, international relations. I'm not sure what they have to do with my research. Maybe nothing. Maybe everything.",

    log4Tag:"Walking · Late Night",
    log4Text:"Arnalds on repeat. My head was somewhere completely else — a city I invented, a person I'll never meet. Walked for two hours without noticing.",

    log5Tag:"Reading · Schrödinger",
    log5Text:"He said that life resists entropy. That felt important, though I couldn't fully say why. Still thinking about it.",

    endingText:"If one day,<br>my research can help someone speak again,<br>or help a family discover disease earlier,<br>then all the slow nights,<br>the uncertainty, and the repeated attempts<br>will have their own meaning.",
    endingSign:"— Let one cloud move another",

    button:"中文"
  },

  zh:{
    navResearch:"研究",
    navPublications:"论文",
    navProjects:"项目",
    navFragments:"科研之外",
    navContact:"联系",

    openingTitle:"让一朵云推动另一朵云。",
    openingSubtitle:"把我收到过的温暖，通过研究继续传递。",
    heroQuote1:"对我来说，科研不只是解决问题。",
    heroQuote2:"它也是把善意继续传递下去的一种方式。",

    eduLabel:"教育经历",
    eduSchool:"南京大学",
    eduDegree:"工学学士<br>生物医学工程",
    eduTime:"2024.09 — 2028.06",

    affilLabel:"所在实验室",
    affilLab:"王冉实验室",
    affilSchool:"智能科学与技术学院<br>南京大学",
    affilRole:"Student Researcher · 2026 — 至今",

    focusLabel:"当前关注",
    focusTitle:"BrainNeRF",
    focusDesc:"物理引导 EEG 空间超分辨率",
    focusNote:"面向脑机接口的鲁棒神经场重建研究。",

    tag1:"医疗人工智能",
    tag2:"脑机接口",
    tag3:"计算神经科学",

    photoCaption:"实验室之外，也在寻找安静的问题。",

    researchTitle:"研究兴趣",

    r1Title:"医疗人工智能",
    r1Desc:"关注医学数据分析、可信医疗 AI 与临床智能应用。",

    r2Title:"脑机接口",
    r2Desc:"关注脑电信号重建、神经解码与脑启发智能。",

    r3Title:"计算神经科学",
    r3Desc:"关注脑活动建模、神经场表示学习与计算神经科学。",

    pubTitle:"论文",
    pubStatus:"正在准备中",
    pubWorkTitle:"基于神经场表示的 EEG 空间超分辨率重建",
    pubDesc1:"我正在准备第一项研究工作，主题是 EEG 空间重建：从稀疏电极观测中恢复缺失脑电通道。这个项目尝试结合神经场表示、时间基建模与物理约束，让模型从有限观测中重建更完整的脑活动信号。",
    pubDesc2:"这个问题背后有一个很现实的动机：如果我们能够用更少的电极重建更完整的脑活动，未来的脑机接口也许可以变得更轻便、更可及，也更容易进入真实使用场景。",
    pubNote:"当研究结果更加完整、适合公开展示时，我会在这里更新更多细节。",

    projectsTitle:"项目",
    projectsIntro:"这些项目共同塑造了我对人工智能、生物医学工程和以人为中心的技术的理解。",

    p1Tag:"当前研究 · EEG · 脑机接口",
    p1Title:"BrainNeRF",
    p1Desc:"我目前的主要研究项目聚焦于 EEG 空间超分辨率：从稀疏电极记录中重建缺失的脑电信号。",
    p1Desc2:"我正在探索神经场表示和时间基建模，是否能够帮助模型突破固定电极位置的限制。相比于只把 EEG 看作不同传感器上的离散信号，这个项目尝试将脑活动建模为一个更加连续的时空场。",
    p1Desc3:"这个方向背后的长期动机，是希望未来的脑机接口不再过度依赖复杂、密集且不便的 EEG 采集设备，同时仍然尽可能保留有价值的神经信息。",

    p2Tag:"早期探索 · 医疗人工智能",
    p2Title:"阿尔茨海默病早期诊断",
    p2Desc:"一个关于阿尔茨海默病早期筛查的多模态分析探索，涉及 EEG、MRI 以及嗅觉相关信号。",
    p2Desc2:"这个方向让我意识到，医疗 AI 不应该只是追求指标上的提升，也应该服务于更早的发现、更清晰的临床理解，以及更加有温度的医疗过程。",
    p2Desc3:"我尤其关注不同类型的生物医学信号如何互相补充，尤其是在单一模态存在噪声、不完整或难以解释的时候。",

    p3Tag:"生物医学材料 · 柔性传感",
    p3Title:"导电水凝胶",
    p3Desc:"一个与导电水凝胶、柔性传感和健康监测应用相关的生物医学材料探索。",
    p3Desc2:"它让我看到，未来的生物医学系统不只是算法问题，也依赖传感器、材料、硬件，以及技术真正接触人体时的安全性与舒适性。",
    p3Desc3:"这段经历也让我更关注真实医疗场景中，物理设备与智能模型之间的连接。",

    fragmentsTitle:"科研之外",
    fragmentsIntro:"实验室以外发生的一些安静的事——很难写进简历，但很容易一直带着。",

    readingLabel:"阅读",
    readingTitle:"《生命是什么》",
    readingDesc:"薛定谔问物理学能不能解释生命。我至今没有答案，但这个问题一直没有离开过我。",
    readingNote:"—— 欧文·薛定谔",

    walkingLabel:"一个习惯",
    walkingTitle:"纯音乐 + 漫无目的地走",
    walkingDesc:"放上纯音乐，然后走，没有目的地。脑子会自动开始演一个故事。不知道这个习惯是什么时候开始的。",

    musicLabel:"音乐",
    musicTitle:"安静夜晚的音乐",
    musicDesc:"久石让 · 坂本龙一 · Ólafur Arnalds",
    musicNote:"适合一个人走路、读论文，或者陪伴一个还没想清楚的问题。",

    logHeading:"— 碎片",

    log1Tag:"骑行 · 钟山 · 早上六点",
    log1Text:"工作日，没什么人。只有高大的梧桐树和小鸟的叫声。不是计划好的早起——只是发现那个时间，山好像是自己的。",

    log2Tag:"夜爬 · 紫金山 · 看日出",
    log2Text:"和朋友一起爬上去，等到日出的时候很冷。但看着太阳出来，那种清醒的开心，平时不容易遇见。",

    log3Tag:"旁听 · 其他院系",
    log3Text:"会去旁听中外文学史、世界宗教发展、国际关系。不太确定这些和我的研究有什么关系。也许没有，也许什么都有。",

    log4Tag:"走路 · 深夜",
    log4Text:"Arnalds 单曲循环。脑子已经在完全另一个地方——一座我编出来的城市，一个我不会遇见的人。走了两个小时没有注意到。",

    log5Tag:"阅读 · 薛定谔",
    log5Text:"他说生命在抵抗熵增。我觉得这句话很重要，但说不清楚为什么。还在想。",

    endingText:"如果有一天，<br>我的研究能够帮助一个人重新开口说话，<br>或者帮助一个家庭更早发现疾病，<br>那么，那些无数个深夜，都值得。",
    endingSign:"—— 让一朵云推动另一朵云",

    button:"EN"
  }
};

let currentLang = "en";
localStorage.setItem("lang", "en");

function replayVisibleAnimations(){
  const visibleSections = document.querySelectorAll(".reveal.visible");

  visibleSections.forEach(section=>{
    section.classList.remove("visible");
  });

  requestAnimationFrame(()=>{
    visibleSections.forEach(section=>{
      void section.offsetWidth;
      section.classList.add("visible");
    });
  });
}

function replayHeroAnimation(){
  const heroItems = document.querySelectorAll(
    ".opening .small-label, .opening h1, .opening-en, .hero-quote"
  );

  heroItems.forEach(item=>{
    item.style.animation = "none";
  });

  requestAnimationFrame(()=>{
    heroItems.forEach(item=>{
      void item.offsetWidth;
      item.style.animation = "";
    });
  });
}

function applyLanguage(lang){
  document.body.classList.add("lang-switching");

  setTimeout(()=>{
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");

      if(translations[lang][key]){
        el.innerHTML = translations[lang][key];
      }
    });

    const btn = document.getElementById("langToggle");

    if(btn){
      btn.textContent = translations[lang].button;
    }

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("lang", lang);
    currentLang = lang;

    document.body.classList.remove("lang-switching");

    replayHeroAnimation();
    replayVisibleAnimations();
  },160);
}

document.getElementById("langToggle")?.addEventListener("click",()=>{
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

applyLanguage(currentLang);

document.addEventListener("pointermove",e=>{
  document.body.style.setProperty("--x",e.clientX+"px");
  document.body.style.setProperty("--y",e.clientY+"px");
});