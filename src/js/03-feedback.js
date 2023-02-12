import { debounce } from 'lodash';

const formEl = document.querySelector('form.feedback-form');
let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const storageValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

addEventListener('load', onLoad);
formEl.addEventListener('input', debounce(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onLoad(e) {
  if (storageValue) {
    Object.keys(storageValue).forEach(key => {
      formEl.querySelector(`[name="${key}"`).value = storageValue[key];
    });
  }
}

function onInput(e) {
  if (storageValue) {
    formData = storageValue;
  }
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  Object.keys(formData).forEach(key => delete formData[key]);
}
