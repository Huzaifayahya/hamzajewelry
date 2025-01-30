let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Get the menu and sidebar elements
const menuContainer = document.getElementById('menu-container');
const sidebar = document.getElementById('sidebar');

// Open the sidebar when the menu is hovered
menuContainer.addEventListener('mouseenter', () => {
    sidebar.classList.add('open');
});

// Close the sidebar when the cursor leaves the sidebar
sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('open');
});
