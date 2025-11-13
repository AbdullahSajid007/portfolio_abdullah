
// Side menu toggle
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}
function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
}

// Scroll animations
const faders = document.querySelectorAll('.fade-in, .fade-up');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
