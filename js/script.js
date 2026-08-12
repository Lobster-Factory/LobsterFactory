// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form (front-end only placeholder — wire up to a backend/email service to go live)
const orderForm = document.getElementById('order-form');
const formNote = document.getElementById('form-note');

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks! We'll be in touch shortly.";
    orderForm.reset();
  });
}
