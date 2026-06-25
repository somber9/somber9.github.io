const nav = document.querySelector(".nav");
const opening = document.querySelector(".opening");

function handleScroll() {
  const y = window.scrollY;

  if (nav) {
    nav.classList.toggle("scrolled", y > 20);
  }

  if (opening) {
    opening.classList.toggle("fade-out", y > 80);
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((el) => observer.observe(el));
