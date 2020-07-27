import '../scss/global';
import fakeAuth from './auth';

const signinForm = document.getElementById('sign-in-form');
const emailInput = document.querySelector('.form-group__input[name="email"]');
const passwordInput = document.querySelector('.form-group__input[name="password"]');

async function login(e) {
  e.preventDefault();
  const user = {
    email: emailInput.value,
    password: passwordInput.value
  };
  const res = await fakeAuth(user);
  console.log(res);
}

signinForm.addEventListener('submit', login);

console.log('Finished!');
