import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('textarea[name="message"]');
console.log(emailInput);

const objLocal = {};

if (localStorage.getItem('feedback-form-state')) {
  const objectVal = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = objectVal.email || '';
  messageInput.value = objectVal.message || '';
}

const setLocal = throttle(e => {
  objLocal[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objLocal));
}, 500);

formEl.addEventListener('input', e => {
  e.preventDefault();
  setLocal(e);
});

formEl.addEventListener('submit', () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

formEl.addEventListener('change', setLocal);
