import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_blue.css';

// Milliseconds converter
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Elements
const inputEl = document.querySelector('input#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');

const timerRef = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// Object.values(ref).forEach(el => console.log(el));
startBtnEl.disabled = true;
let stopBtnEl = null;
let timerId = null;
let selectedDateMs = null;
const SELECTED_DATE = 'selectedDateMs';

// Date selector
const fp = flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  onClose(selectedDates) {
    checkSelectedDate(selectedDates);
  },
});

function checkSelectedDate(selectedDates) {
  selectedDateMs = selectedDates[0].getTime();
  console.log(selectedDateMs);
  if (selectedDateMs <= Date.now()) {
    startBtnEl.disabled = true;
    removeAlert();
    return makeAlert('Please choose a date in the future');
  }
  startBtnEl.disabled = false;
}

// Alert message
function makeAlert(message) {
  const alert = document.createElement('p');
  alert.className = 'alert';
  alert.textContent = `${message}`;
  alert.style.backgroundColor = 'red';
  alert.style.color = 'white';
  alert.style.fontSize = '24px';
  alert.style.display = 'inline-block';
  alert.style.margin = '10px';
  alert.style.padding = '10px';
  startBtnEl.nextElementSibling.after(alert);
}

function removeAlert() {
  setTimeout(() => {
    const alertRemain = document.querySelector('p.alert');
    if (alertRemain) {
      alertRemain.remove();
    }
  }, 3000);
}

// Set timer on Button
startBtnEl.addEventListener('click', setTimer);

function setTimer() {
  timerId = setInterval(() => {
    const remainMs = selectedDateMs - Date.now();
    const timeObj = convertMs(remainMs);
    if (remainMs > 0) {
      Object.keys(timerRef).forEach(
        el => (timerRef[el].textContent = `${timeObj[el]}`.padStart(2, '0'))
      );
    }
  }, 1000);

  startBtnEl.style.display = 'none';
  inputEl.disabled = true;

  localStorage.setItem(SELECTED_DATE, selectedDateMs);

  makeStopBtn();
}

// Set timer on Reload document
addEventListener('load', onLoad);

function onLoad() {
  console.log(localStorage.getItem(SELECTED_DATE));
  if (localStorage.getItem(SELECTED_DATE)) {
    selectedDateMs = localStorage.getItem(SELECTED_DATE);
    setTimer();
  }
}

// Stop timer
function stopTimer() {
  selectedDateMs = null;
  localStorage.removeItem(SELECTED_DATE);
  inputEl.disabled = false;
  stopBtnEl.remove();
  startBtnEl.style.display = 'inline';
  clearInterval(timerId);
  Object.keys(timerRef).forEach(el => (timerRef[el].textContent = '00'));
}

function makeStopBtn() {
  const stopBtn = document.createElement('button');
  stopBtn.textContent = 'Stop';
  stopBtn.type = 'button';
  stopBtn.dataset.stop = '';
  startBtnEl.after(stopBtn);

  stopBtnEl = document.querySelector('button[data-stop]');
  stopBtnEl.addEventListener('click', stopTimer);
}
