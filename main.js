// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav ul');
if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('open'));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Card spotlight follows the cursor
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Rotating word in the hero
const rot = document.querySelector('.rotator');
if (rot) {
  const words = JSON.parse(rot.dataset.words);
  let i = 0;
  setInterval(() => {
    i = (i + 1) % words.length;
    rot.style.opacity = 0;
    setTimeout(() => { rot.textContent = words[i]; rot.style.opacity = 1; }, 250);
  }, 2400);
  rot.style.transition = 'opacity .25s';
}

// Year in footer
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
