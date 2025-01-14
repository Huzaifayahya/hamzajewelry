let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 300) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  
  lastScrollTop = currentScroll;
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
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const quantityInput = document.querySelector('#quantity');

minusButton.addEventListener('click', () => {
  const currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
});

plusButton.addEventListener('click', () => {
  const currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
});

