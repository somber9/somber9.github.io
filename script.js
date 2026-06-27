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

    researchTitle:"Research Interests",

    r1Title:"AI for Healthcare",
    r2Title:"Brain–Computer Interfaces",
    r3Title:"Computational Neuroscience",

    r1Desc:"Developing trustworthy AI systems for medical data.",
    r2Desc:"Reconstructing brain signals for BCI.",
    r3Desc:"Modeling neural activity with computational methods.",

    pubTitle:"Publications",
    pubStatus:"In Preparation",
    pubWorkTitle:"EEG Spatial Super-Resolution with Neural Field Representations",
    pubDesc1:`I am currently preparing my first research work on EEG spatial reconstruction.`,
    pubDesc2:`We aim to reconstruct brain activity from sparse electrodes.`,
    pubNote:"More details will be added when ready.",

    projectsTitle:"Projects",
    projectsIntro:"Every project started with a question I couldn’t answer.",

    labelProblem:"Problem",
    labelAttempt:"Attempt",
    labelLearned:"Learned",

    p1Tag:"EEG · BCI",
    p1Title:"BrainNeRF",
    p1Desc:"BCI needs fewer electrodes but keeps signal quality.",
    p1Desc2:"Neural field reconstruction of EEG signals.",
    p1Desc3:"Interpretable EEG reconstruction is key.",

    p2Tag:"Healthcare AI",
    p2Title:"Alzheimer’s Diagnosis",
    p2Desc:"Early diagnosis without expensive MRI.",
    p2Desc2:"Multimodal EEG + olfactory fusion.",
    p2Desc3:"Low-tech signals can be highly predictive.",

    p3Tag:"Biomedical Materials",
    p3Title:"Conductive Hydrogel",
    p3Desc:"Is electrode material the bottleneck?",
    p3Desc2:"Studying conductivity and biocompatibility.",
    p3Desc3:"Signal stability is the real challenge.",

    fragmentsTitle:"Beyond Research",
    fragmentsIntro:"Small things outside the lab that still matter.",

    readingLabel:"Reading",
    walkingLabel:"A Habit",
    musicLabel:"Listening",

    readingTitle:"What Is Life?",
    readingDesc:"Schrödinger’s question still stays with me.",
    readingNote:"— Erwin Schrödinger",

    walkingTitle:"Music + Walking",
    walkingDesc:"Walking without destination.",

    musicTitle:"Quiet Night Music",
    musicDesc:"Joe Hisaishi · Ryuichi Sakamoto · Ólafur Arnalds",
    musicNote:"For thinking and writing.",

    logHeading:"— Fragments",

    log1Tag:"Cycling · Zhongshan · 6 a.m.",
    log1Text:"Quiet morning.",

    log2Tag:"Hiking · Purple Mountain",
    log2Text:"Sunrise with friends.",

    log3Tag:"Auditing Courses",
    log3Text:"Learning outside my major.",

    log4Tag:"Walking · Late Night",
    log4Text:"Random thoughts.",

    log5Tag:"Reading · Schrödinger",
    log5Text:"Entropy and life.",

    endingText:`If my work can help someone, it will be enough.`,
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
    openingSubtitle:"把我收到过的温暖继续传递。",
    heroQuote1:"科研不只是解决问题。",
    heroQuote2:"也是传递善意。",

    eduLabel:"教育经历",
    eduSchool:"南京大学",
    eduDegree:"工学学士<br>生物医学工程",
    eduTime:"2024.09 — 2028.06",

    affilLabel:"所在实验室",
    affilLab:"王冉实验室",
    affilSchool:"智能科学与技术学院<br>南京大学",
    affilRole:"Student Researcher · 2026 — 至今",

    focusLabel:"当前方向",
    focusTitle:"BrainNeRF",
    focusDesc:"物理引导 EEG 空间重建",
    focusNote:"脑机接口研究",

    researchTitle:"研究方向",

    r1Title:"AI for Healthcare",
    r2Title:"脑机接口",
    r3Title:"计算神经科学",

    projectsTitle:"项目",
    projectsIntro:"每个项目都来自一个问题。",

    labelProblem:"问题",
    labelAttempt:"尝试",
    labelLearned:"收获",

    fragmentsTitle:"科研之外",
    fragmentsIntro:"一些生活片段",

    readingLabel:"阅读",
    walkingLabel:"习惯",
    musicLabel:"听歌",

    readingTitle:"生命是什么？",
    readingDesc:"薛定谔的问题一直影响着我。",
    readingNote:"—— 薛定谔",

    musicNote:"用于思考与写作",

    endingText:"如果研究能帮助到别人，就是意义。",
    endingSign:"—— 让一朵云推动另一朵云",

    button:"EN"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]){
      el.innerHTML = translations[lang][key];
    }
  });

  const btn = document.getElementById("langToggle");
  if(btn) btn.textContent = translations[lang].button;

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

document.getElementById("langToggle")?.addEventListener("click",()=>{
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

applyLanguage(currentLang);
