const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
});

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

theme: {
  extend: {
    maxWidth: {
      '7xl': '80rem', // Asegura 1280px máximo
    },
  }
}
