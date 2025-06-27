const container = document.querySelector(".timeline-container");
const progress = document.querySelector(".timeline-progress");
container.addEventListener("scroll", () => {
  const scrollWidth = container.scrollWidth - container.clientWidth;
  const scrollLeft = container.scrollLeft;
  const progressWidth = (scrollLeft / scrollWidth) * 100;
  progress.style.width = `${progressWidth}%`;
});
