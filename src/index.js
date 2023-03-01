import { debounce } from 'lodash';
import './sass/styles.scss';
import { inputEl, ulEl, divEl } from './js/refs';
import { fetchCountries, normalizeData } from './js/fetchCountries';
import { onFetchError, onFetchOverflow } from './js/errorHandlers';
import btnMarkupFn from './templates/countryBtn.hbs';
import listMarkupFn from './templates/countryList.hbs';
import infoMarkupFn from './templates/countryInfo.hbs';

const DEBOUNCE_DELAY = 500;
const SEARCH_LIMMIT = 15;

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
ulEl.addEventListener('click', pickCountry);

function onSearch(e) {
  ulEl.innerHTML = '';
  divEl.innerHTML = '';
  const countryName = e.target.value;

  fetchCountries(countryName).then(renderCountryMarkup).catch(onFetchError);
}

function renderCountryMarkup(data) {
  const normData = normalizeData(data);

  const btnMarkup = normData.reduce((acc, el) => acc + btnMarkupFn(el), '');
  const listMarkup = normData.reduce((acc, el) => acc + listMarkupFn(el), '');
  const infoMarkup = normData.map(el => infoMarkupFn(el));

  if (data.length > SEARCH_LIMMIT) {
    return onFetchOverflow();
  }

  ulEl.innerHTML = btnMarkup;

  if (data.length === 1) {
    ulEl.innerHTML = listMarkup;
    divEl.innerHTML = infoMarkup;
  }
}

function pickCountry(e) {
  if (e.target.dataset.pick) {
    const countryName = e.target.dataset.pick;
    fetchCountries(countryName).then(renderCountryMarkup).catch(onFetchError);
  }
}
