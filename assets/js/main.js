/* ============================
   BengkelPro — main.js
   ============================ */

// ── Navbar scroll shadow ──────────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Hamburger menu ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// ── Floating sidebar toggle ───────────────────────────────────────
const fsbToggle    = document.getElementById('fsbToggle');
const floatSidebar = document.getElementById('floatSidebar');
if (fsbToggle && floatSidebar) {
  fsbToggle.addEventListener('click', () => {
    floatSidebar.classList.toggle('collapsed');
    fsbToggle.textContent = floatSidebar.classList.contains('collapsed') ? '‹' : '›';
  });
}

// ── Gallery filter ─────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });
}

// ── Contact form submit ────────────────────────────────────────────
const kontakForm  = document.querySelector('.contact-form');
const successState = document.querySelector('.success-state');
if (kontakForm && successState) {
  kontakForm.addEventListener('submit', (e) => {
    e.preventDefault();
    kontakForm.style.display = 'none';
    successState.style.display = 'block';
  });
}

// ── Scroll-reveal animation ────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}
