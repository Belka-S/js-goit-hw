// ******************** lodash ********************

// console.dir(_);

// -----------------------------------------------------------------------------

const test = {
  name: 'Mango',
  score: 83,
  courses: { a: 'math', b: 'physics', c: 'bio' },
};

// console.log(_.isEmpty(test));
// console.log(_.isEmpty({}));

// console.log(_.get(test, 'courses.b'));
// console.log(test?.courses?.b);

// console.log(_.union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));

// console.table(_.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')); // => [{ 'x': 1 }, { 'x': 2 }]);

// console.log(_.range(0, 20, 5)); // => [0, 5, 10, 15]);

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

// console.table(_.sortBy(users, 'user')); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
// console.table(_.sortBy(users, ['user', 'age'])); // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// console.log(_.sum([1, 2, 3, 4, 5]));

const insta = [
  { id: '000', position: 1, likes: 3, tags: ['js', 'nodejs', 'css'] },
  { id: '001', position: 11, likes: 6, tags: ['html', 'css', 'nodejs', 'js'] },
  { id: '002', position: 8, likes: 11, tags: ['html', 'js', 'nodejs'] },
  { id: '003', position: 5, likes: 1, tags: ['css', 'react', 'nodejs'] },
  { id: '004', position: 6, likes: 1, tags: ['js', 'nodejs', 'react'] },
];

// console.log(_.sumBy(insta, item => item.likes));

// console.log(_.uniq([1, 2, 2, 4, 7, 3, 8, 7, 2, 1]));

// console.table(_.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')); // => [{ 'x': 1 }, { 'x': 2 }]);

// console.log(_.minBy(insta, 'likes'));
