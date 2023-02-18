import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('form.form'),
};
// Object.values(ref).forEach(el => console.log(el));

ref.formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let position = 1;
  let delay = Number(ref.delayEl.value);
  const step = Number(ref.stepEl.value);
  const amount = Number(ref.amountEl.value);

  while (position <= amount) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    position += 1;
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
