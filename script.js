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
    r1Desc:"Developing trustworthy AI methods for medical data analysis and clinical applications.",

    r2Title:"Brain–Computer Interfaces",
    r2Desc:"Exploring neural signal decoding, EEG reconstruction, and brain-inspired intelligence.",

    r3Title:"Neuroscience",
    r3Desc:"Interested in neural representation learning and computational modeling of brain activity.",

    pubTitle:"Publications",
    pubStatus:"In Preparation",
    pubWorkTitle:"EEG Spatial Super-Resolution with Neural Field Representations",
    pubDesc1:`I am currently preparing my first research work on EEG spatial reconstruction. The project studies how to recover missing EEG channels from sparse electrode observations using neural field representations, temporal basis modeling, and physics-guided constraints.`,
    pubDesc2:`The motivation behind this work is simple: if we can reconstruct more complete brain activity from fewer electrodes, future brain-computer interfaces may become lighter, more accessible, and easier to use in real-world settings.`,
    pubNote:"More details will be added when the work becomes ready for public release.",

    projectsTitle:"Projects",

    p1Tag:"EEG · BCI",
    p1Title:"BrainNeRF",
    p1Desc:"A real BCI that people actually use can’t require a dense cap full of electrodes. Portable means fewer electrodes — but fewer electrodes means less signal. How do you resolve that?",
    p1Desc2:"I explored neural field representations to model brain activity as a continuous spatial-temporal field, and tried to reconstruct high-density EEG signals from sparse electrode observations.",
    p1Desc3:"ML-generated EEG reconstruction is often a black box: it works, but nobody knows why. What we’re building is physically grounded — interpretable and verifiable.",

    p2Tag:"Healthcare AI",
    p2Title:"Alzheimer’s Disease Early Diagnosis",
    p2Desc:"Existing early screening methods for Alzheimer’s almost always require expensive equipment like MRI.",
    p2Desc2:"I worked on EEG, MRI, and olfactory signal alignment for multimodal fusion.",
    p2Desc3:`Olfactory signals turned out to have far more diagnostic value than expected — olfactory decline often precedes cognitive symptoms. This made me rethink the role of "low-tech" physiological signals in medical AI.`,

    p3Tag:"Biomedical Materials",
    p3Title:"Conductive Hydrogel",
    p3Desc:"Is electrode material the bottleneck in EEG acquisition?",
    p3Desc2:"I studied hydrogel conductivity, biocompatibility, and mechanical constraints.",
    p3Desc3:"Capturing signal is only the first step. Stable transmission is a deeper problem.",

    fragmentsTitle:"Beyond Research",

    readingTitle:"What Is Life?",
    readingDesc:`Schrödinger asked if physics could explain life. I still don't have an answer, but the question hasn't left me.`,
    readingNote:"— Erwin Schrödinger",

    walkingTitle:"Music + Walking",
    walkingDesc:"I walk without a destination and let thoughts emerge naturally.",

    musicTitle:"Quiet Night Music",
    musicDesc:"Joe Hisaishi · Ryuichi Sakamoto · Ólafur Arnalds",

    logHeading:"— Fragments",

    log1Tag:"Cycling · Zhongshan · 6 a.m.",
    log1Text:"A quiet morning with no one around.",

    log2Tag:"Hiking · Purple Mountain",
    log2Text:"Watching sunrise with friends.",

    log3Tag:"Auditing Courses",
    log3Text:"Exploring ideas beyond my major.",

    log4Tag:"Walking · Late Night",
    log4Text:"Thinking in a different world.",

    log5Tag:"Reading · Schrödinger",
    log5Text:"Still thinking about entropy and life.",

    endingText:`If one day my research can help someone speak again, or help a family detect disease earlier, then all the long nights will have meaning.`,
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

    p1Desc3:"机器学习 EEG 重建往往是黑箱，但我们希望让它可解释。",

    p2Desc3:`嗅觉信号的价值比预期更高，这让我重新看待"低技术信号"在医疗 AI 中的作用。`,

    readingTitle:"《存在与时间》",
    readingDesc:`海德格尔问的不是生命是什么，而是存在意味着什么。`,
    readingNote:"—— 海德格尔",

    endingText:`如果有一天我的研究能帮助一个人重新说话，或帮助一个家庭更早发现疾病，那么一切努力都是值得的。`,
    endingSign:"—— 让一朵云推动另一朵云",

    button:"EN"
  }
};

let currentLang = "en";
localStorage.setItem("lang", "en");

function applyLanguage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]){
      el.innerHTML = translations[lang][key];
    }
  });

  const btn = document.getElementById("langToggle");
  if(btn) btn.textContent = translations[lang].button;

  currentLang = lang;
}

document.getElementById("langToggle")?.addEventListener("click",()=>{
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

applyLanguage(currentLang);
