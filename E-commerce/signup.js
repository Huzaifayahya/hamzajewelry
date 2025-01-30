const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill all fields');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    window.location.href = 'hamzajewellery.html';
  }
});
