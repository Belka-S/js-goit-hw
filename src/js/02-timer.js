import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_blue.css';

const inputEl = document.querySelector('input#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');

const timerRef = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// Object.values(ref).forEach(el => console.log(el));

// Date selector
startBtnEl.disabled = true;
let selectedDateMs = null;

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
  if (selectedDateMs <= Date.now()) {
    startBtnEl.disabled = true;
    removeAlert();
    return makeAlert('Please choose a date in the future');
  }
  startBtnEl.disabled = false;
}

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

// Set timer
startBtnEl.addEventListener('click', setTimer);

function setTimer() {
  setInterval(() => {
    const remainMs = selectedDateMs - Date.now();
    const timeObj = convertMs(remainMs);
    if (remainMs > 0) {
      Object.keys(timerRef).forEach(
        el => (timerRef[el].textContent = `${timeObj[el]}`.padStart(2, '0'))
      );
    }
  }, 1000);
  startBtnEl.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
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
