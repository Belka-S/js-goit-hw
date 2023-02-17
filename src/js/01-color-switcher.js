const ref = {
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};
// Object.values(ref).forEach(el => console.log(el));

ref.startBtnEl.addEventListener('click', onStartClick);
ref.stopBtnEl.addEventListener('click', onStopClick);

ref.stopBtnEl.disabled = true;
let intervalId = null;

function onStartClick() {
  ref.stopBtnEl.disabled = false;
  ref.startBtnEl.disabled = true;
  intervalId = setInterval(() => {
    ref.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopClick() {
  ref.stopBtnEl.disabled = true;
  ref.startBtnEl.disabled = false;
  clearInterval(intervalId);
}
