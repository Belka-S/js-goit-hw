import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onFetchError(error) {
  Notify.failure(`Oops, there is no country with that name. ${error}`, {
    timeout: 5000,
  });
}

export function onFetchOverflow() {
  Notify.info('Too many matches found. Please enter a more specific name.', {
    timeout: 5000,
  });
}
