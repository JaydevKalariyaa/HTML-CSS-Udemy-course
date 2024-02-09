//for button close open navigation
let btn = document.querySelector(".btn-mobile-nav");
btn.addEventListener("click", (e) => {
  document.querySelector("header").classList.toggle("nav-open");
});
let alllinks = document.querySelectorAll("a");
alllinks.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    document.querySelector("header").classList.remove("nav-open");
  });
});
//for sticky navigation
const sectionHeroEl = document.querySelector(".hero--section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
