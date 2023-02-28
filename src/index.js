import { debounce } from 'lodash';
import './sass/styles.scss';
import { inputEl, ulEl, divEl } from './js/refs';
import { fetchCountries, roundArea, roundPeople } from './js/fetchCountries';
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

function pickCountry(e) {
  if (e.target.dataset.pick) {
    const countryName = e.target.dataset.pick;
    fetchCountries(countryName).then(renderCountryMarkup).catch(onFetchError);
  }
}

function renderCountryMarkup(data) {
  console.log(data[0].maps.googleMaps);
  data.forEach(el => {
    el.population = roundPeople(el.population);
    el.area = roundArea(el.area);
    if (el.name.common === el.name.official) el.name.official = '';
  });

  const btnMarkup = data.reduce((acc, el) => acc + btnMarkupFn(el), '');
  const listMarkup = data.reduce((acc, el) => acc + listMarkupFn(el), '');
  const infoMarkup = data.map(el => infoMarkupFn(el));

  if (data.length > SEARCH_LIMMIT) {
    return onFetchOverflow();
  }

  ulEl.innerHTML = btnMarkup;

  if (data.length === 1) {
    ulEl.innerHTML = listMarkup;
    divEl.innerHTML = infoMarkup;
  }
}

fetch('https://restcountries.com/v3.1/name/peru')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(onFetchError);
