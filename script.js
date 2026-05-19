const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  requestAnimationFrame(() => {
    heroTitle.classList.add("glitch");
  });
  window.setTimeout(() => {
    heroTitle.classList.remove("glitch");
  }, 1600);
}
