document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.querySelector('.nav-wrap');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 16), { passive: true });

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((element) => observer.observe(element));
