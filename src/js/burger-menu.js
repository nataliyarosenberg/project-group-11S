
const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const navLinks = document.querySelectorAll('.mobile-nav-list a, .mobile-btn');

function openMenu() {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEsc);
  document.addEventListener('click', handleClickOutside);
}

function closeMenu() {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEsc);
  document.removeEventListener('click', handleClickOutside);
}

function handleEsc(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

function handleClickOutside(e) {
  if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
    closeMenu();
  }
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      closeMenu();
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
