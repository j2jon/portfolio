const container = document.querySelector(".timeline-container");
const progress = document.querySelector(".timeline-progress");
container.addEventListener("scroll", () => {
  const scrollWidth = container.scrollWidth - container.clientWidth;
  const scrollLeft = container.scrollLeft;
  const progressWidth = (scrollLeft / scrollWidth) * 100;
  progress.style.width = `${progressWidth}%`;
});

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
