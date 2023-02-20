// ******************** Внутреннее замыкание ********************

const fnOut = function (value) {
  const innerVariable = 'Внутрення переменная';
  const fnInner = function (item) {
    console.log(value);
    console.log(innerVariable);
    console.log(item);
  };
  return fnInner;
};

const fn = fnOut('Что-нибудь');
// fn('Тело внутренней функции');
// -----------------------------------------------------------------------------
const player = function (name) {
  const game = function (game) {
    console.log(`${name} plays ${game}`);
  };
  return game;
};

const mj = player('MJ');
// mj('Basketball');
// mj('Baseball');
// mj('Golf');

const lebron = player('LeBron');
// lebron('Basketball');
// -----------------------------------------------------------------------------
const toPoint = function (item) {
  return function (number) {
    console.log(number.toFixed(item));
  };
};
const roundTo2 = toPoint(2);
const roundTo5 = toPoint(5);

// roundTo2(2.53752342);
// roundTo5(4.253458564857);
// -----------------------------------------------------------------------------
const myFactoryLib = function () {
  let value = 0;
  const add = function (number) {
    value += number;
  };
  return {
    add,
    getValue() {
      return value;
    },
  };
};
const myLib = myFactoryLib();
// console.log('myLib: ', myLib);
myLib.add(10);
// console.log(myLib.getValue(10));
// -----------------------------------------------------------------------------
const salaryManagerFactory = function (name, baseSalary) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  };

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `${name} - ${baseSalary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('LeBron', 5000);
// console.dir(salaryManager.raise);
// console.log(salaryManager.salary);
// console.log(salaryManager.current());
// -----------------------------------------------------------------------------
