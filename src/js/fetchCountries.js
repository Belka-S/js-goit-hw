const BASE_URL = 'https://restcountries.com/v3.1/name';
const properties = [
  'flags',
  'name',
  'capital',
  'languages',
  'currencies',
  'population',
  'area',
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

export const normalizeData = data =>
  data.map(el => {
    const ifDifferent = el.name.common === el.name.official ? false : true;

    return {
      flag: el.flags.svg,
      name: {
        common: el.name.common,
        official: el.name.official,
        different: ifDifferent,
      },
      capital: el.capital,
      languages: el.languages,
      currency: el.currencies,
      population: roundPeople(el.population),
      area: roundArea(el.area),
      map: el.maps.googleMaps,
    };
  });

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
