const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = [];
const STAR_COUNT = 140;

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.15 + 0.05,
    alpha: Math.random(),
    blink: Math.random() * 1000
  });
}

function animate(time) {
  ctx.clearRect(0, 0, w, h);

  stars.forEach(s => {
    s.x -= s.speed;
    if (s.x < 0) {
      s.x = w;
      s.y = Math.random() * h;
    }

    const blink = (Math.sin(time * 0.001 + s.blink) + 1) / 2;
    ctx.fillStyle = `rgba(255,255,255,${0.3 + blink * 0.7})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate(0);