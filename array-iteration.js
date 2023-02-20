const insta = [
  { id: '000', position: 1, likes: 3, tags: ['js', 'nodejs', 'css'] },
  { id: '001', position: 11, likes: 6, tags: ['html', 'css', 'nodejs', 'js'] },
  { id: '002', position: 8, likes: 11, tags: ['html', 'js', 'nodejs'] },
  { id: '003', position: 5, likes: 1, tags: ['css', 'react', 'nodejs'] },
  { id: '004', position: 6, likes: 3, tags: ['js', 'nodejs', 'react'] },
];

// ******************** .map() ********************

const getChangedID = (social, id, newId) =>
  social.map(item => (item.id === id ? { ...item, id: newId } : item));

// console.table(getChangedID(insta, '003', 'qwe'));

// ******************** .reduce() ********************

const getAllTags = social =>
  social.reduce((acc, item) => [...acc, ...item.tags], []);

// console.log(getAllTags(insta));
// -----------------------------------------------------------------------------
const tagList = social =>
  social
    .reduce((acc, item) => {
      acc.push(...item.tags);
      return acc;
    }, [])
    .filter((item, index, array) => array.indexOf(item) === index);

// console.log('tagList(insta): ', tagList(insta));
// -----------------------------------------------------------------------------
const getLongTagCount2 = getAllTags(insta).reduce((acc, tag) => {
  if (!acc[tag]) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
}, {});

// console.table(getLongTagCount2);
// -----------------------------------------------------------------------------
const getTagCount1 = getAllTags(insta).reduce(
  (acc, tag) =>
    acc[tag] ? { ...acc, [tag]: acc[tag] + 1 } : { ...acc, [tag]: 1 },
  {}
);

// console.table(getTagCount1);
// -----------------------------------------------------------------------------
const getTagCount = getAllTags(insta).reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);

// console.table(getTagCount);
// -----------------------------------------------------------------------------

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
