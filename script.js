// Loader
window.addEventListener('load', function() {
  // Fade out loader, then remove it from DOM
  const loader = document.getElementById('loader');
  loader.classList.add('hide');
  setTimeout(() => loader.style.display = "none", 600);

  // Initial header/footer fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('loaded');
  });
});

// IntersectionObserver for scroll-reveal
document.addEventListener('DOMContentLoaded', function() {
  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const revealConfig = {
    threshold: 0.15
  };
  const onReveal = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new window.IntersectionObserver(onReveal, revealConfig);
  revealEls.forEach(el => observer.observe(el));
});