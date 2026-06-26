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

openingTitle:"让一朵云推动另一朵云。",
openingSubtitle:"Passing forward the kindness I have received.",
heroQuote1:"Research, to me, is not only about solving problems.",
heroQuote2:"It is about carrying kindness forward.",

eduLabel:"EDUCATION",
eduSchool:"Nanjing University",
eduDegree:"Bachelor of Engineering<br>Biomedical Engineering",
eduTime:"Sep. 2024 — Jun. 2028",

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
pubStatus:"Coming Soon",

projectsTitle:"Projects",

p1Title:"BrainNeRF",
p1Desc:"EEG spatial super-resolution using neural fields and physics-guided learning.",

p2Title:"Alzheimer’s Disease",
p2Desc:"Multimodal analysis for early diagnosis using EEG, MRI, and olfactory signals.",

p3Title:"Conductive Hydrogel",
p3Desc:"Biomedical materials for flexible sensing and healthcare applications.",

fragmentsTitle:"Beyond Research",
fragmentsIntro:"Things that quietly shaped the way I think, work, and see the world.",

booksTitle:"On My Shelf",
booksText:"The Beginning of Infinity<br>Poor Charlie's Almanack<br>Surely You're Joking, Mr. Feynman!",

musicTitle:"Soundtracks",
musicText:"Joe Hisaishi<br>Ryuichi Sakamoto<br>Ólafur Arnalds",

quotesTitle:"A Thought",
quotesText:"Research is one way<br>to return the kindness<br>I once received.",

scrapsTitle:"Giving Back",
scrapsText:"Volunteering with children.<br>Community service.<br>Remembering that research begins and ends with people.",

endingText:"如果有一天，<br>我的研究能够帮助一个人重新开口说话，<br>或者帮助一个家庭更早发现疾病，<br>那么，那些无数个深夜，都值得。",
endingSign:"—— 让一朵云推动另一朵云",

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
pubStatus:"Coming Soon",

projectsTitle:"项目",

p1Title:"BrainNeRF",
p1Desc:"基于神经场与物理引导学习的 EEG 空间超分辨率方法。",

p2Title:"阿尔茨海默病早期诊断",
p2Desc:"结合 EEG、MRI 与嗅觉信号的多模态早期诊断分析。",

p3Title:"导电水凝胶",
p3Desc:"面向柔性传感与健康应用的生物医学材料研究。",

fragmentsTitle:"科研之外",
fragmentsIntro:"一些塑造了我的思考方式、科研态度与生活热爱的片段。",

booksTitle:"书架",
booksText:"《无穷的开始》<br>《穷查理宝典》<br>《别闹了，费曼先生》",

musicTitle:"音乐",
musicText:"久石让<br>坂本龙一<br>Ólafur Arnalds",

quotesTitle:"一句话",
quotesText:"科研，是把曾经收到过的善意，<br>继续传递下去的一种方式。",

scrapsTitle:"回馈社会",
scrapsText:"儿童志愿服务。<br>社区公益活动。<br>始终记得，科研的起点与终点都是人。",

endingText:"如果有一天，<br>我的研究能够帮助一个人重新开口说话，<br>或者帮助一个家庭更早发现疾病，<br>那么，那些无数个深夜，都值得。",
endingSign:"—— 让一朵云推动另一朵云",

button:"EN"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang){
  document.body.classList.add("lang-switching");

  setTimeout(()=>{
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    const btn = document.getElementById("langToggle");
    if(btn) btn.textContent = translations[lang].button;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("lang", lang);
    currentLang = lang;

    document.body.classList.remove("lang-switching");
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