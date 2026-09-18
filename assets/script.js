// Background particle/network animation
const canvas = document.getElementById("robotics-bg");
const ctx = canvas.getContext("2d");

let width, height, particles = [];

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(70, Math.floor(width / 18));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16
  }));
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];

    ctx.beginPath();
    ctx.arc(a.x, a.y, 1.35, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120, 231, 255, 0.34)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.hypot(dx, dy);

      if (d < 125) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(120, 231, 255, ${0.06 * (1 - d / 125)})`;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animate();

document.getElementById("year").textContent = new Date().getFullYear();

// Add small active-nav behavior
const sections = document.querySelectorAll("main section[id]");
const navLinks = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.style.color = "");
    const active = navLinks.find(link => link.getAttribute("href") === `#${entry.target.id}`);
    if (active) active.style.color = "var(--text)";
  });
}, { threshold: 0.42 });

sections.forEach(section => observer.observe(section));
