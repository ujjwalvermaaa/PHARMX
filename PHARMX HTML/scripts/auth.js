// Auth Logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform login logic here
  console.log('Login:', email, password);
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform signup logic here
  console.log('Signup:', email, password);
});