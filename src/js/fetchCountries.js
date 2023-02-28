const BASE_URL = 'https://restcountries.com/v3.1/name';
const properties = [
  'name',
  'flags',
  'capital',
  'population',
  'area',
  'languages',
  'currencies',
  'maps',
];

export function fetchCountries(name) {
  return fetch(
    `${BASE_URL}/${name.trim()}?fields=${properties.join(',')}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function roundPeople(number) {
  return number > 1000000
    ? `${(number / 1000000).toFixed(1)} mln`
    : `${(number / 1000).toFixed(1)} thou`;
}

export function roundArea(number) {
  const mln = Math.floor(number / 1000000);
  const thou = Math.floor(number / 1000);
  if (mln >= 1) {
    return `${mln},${thou - mln * 1000},${number - thou * 1000} sq.km`;
  }
  if (thou >= 1) {
    return `${thou},${number - thou * 1000} sq.km`;
  }
  return `${number} sq.km`;
}
