var typed = new Typed('#typed', {
  strings: ['CYBERSECURITY INNOVATOR', 'FULL STACK SOFTWARE ENGINEER', 'DATA SCIENTIST', 'REVERSE ENGINEER', 'MENTOR &amp; TECHNOLOGIST'],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});
  
VANTA.GLOBE({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xfef08a,
  backgroundColor: 0x0f0f0f
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-right a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const navLink = document.querySelector(`.navbar-right a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));


const floatingLinks = document.querySelectorAll(".dot-link");
function activateLinkOnScroll() {
  let index = sections.length;
  while (--index && window.scrollY + 200 < sections[index].offsetTop) {}
  floatingLinks.forEach((link) => link.classList.remove("active"));
  floatingLinks[index]?.classList.add("active");
}
activateLinkOnScroll();
window.addEventListener("scroll", activateLinkOnScroll);

const container = document.querySelector(".timeline-container");
const progress = document.querySelector(".timeline-progress");
container.addEventListener("scroll", () => {
  const scrollWidth = container.scrollWidth - container.clientWidth;
  const scrollLeft = container.scrollLeft;
  const progressWidth = (scrollLeft / scrollWidth) * 100;
  progress.style.width = `${progressWidth}%`;
});

const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.style.zIndex = 9999;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let trails = [];
let isMouseDown = false;

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) isMouseDown = true; // Left button
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    trails.push({ x: e.clientX, y: e.clientY, alpha: 1 });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trails.forEach((t, i) => {
    ctx.beginPath();
    ctx.arc(t.x, t.y, 12, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 120, ${t.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#fef08a";
    ctx.fill();
    t.alpha -= 0.03;
    if (t.alpha <= 0) trails.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


