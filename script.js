const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const heroTitle = document.querySelector(".hero-title");
const GLITCH_DURATION = 1100;
if (heroTitle) {
  if (!heroTitle.dataset.glitch) {
    heroTitle.dataset.glitch = heroTitle.textContent?.trim() ?? "";
  }
  requestAnimationFrame(() => {
    heroTitle.classList.add("glitch");
  });
  setTimeout(() => {
    heroTitle.classList.remove("glitch");
  }, GLITCH_DURATION);
}
