// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

// Side menu toggle
function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('active');
}
function closeMenu() {
  document.getElementById('sideMenu').classList.remove('active');
}
