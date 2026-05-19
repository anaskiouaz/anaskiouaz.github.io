const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  if (!heroTitle.dataset.glitch) {
    heroTitle.dataset.glitch = heroTitle.textContent?.trim() ?? "";
  }
  requestAnimationFrame(() => {
    heroTitle.classList.add("glitch");
  });
  setTimeout(() => {
    heroTitle.classList.remove("glitch");
  }, 1600);
}
