const user = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);

    const innerFn = function () {
      console.log('this in Fn showName: ', this);
    };
    innerFn();

    const innerArrow = () => {
      console.log('this in Arrow showName: ', this); // забирает this из контекста (user) вызова user.showName();
      console.log('this.fullName: ', this.fullName);
      console.log('забирает this из контекста (user) вызова user.showName()');
    };
    innerArrow();
  },
};
//  // забирает this из контекста (user) вызова user.showName();
// user.showName();
// console.log('-----------------------------------');
// -----------------------------------------------------------------------------
const object = {
  fullName: 'Kiwi',
  showName() {
    console.log('this in Arrow showName: ', this);
    console.log('this.fullName: ', this.fullName);
  },
};

const object1 = {
  fullName: 'Kiwi',
  showName: function () {
    console.log('this in Arrow showName: ', this);
    console.log('this.fullName: ', this.fullName);
  },
};

const object2 = {
  fullName: 'Kiwi',
  showName: () => {
    console.log('this in Arrow showName: ', this); // забирает this из глоБальной оБласти видимости, где был объявлен object2;
    console.log(
      'забирает this из глоБальной оБласти видимости, где был объявлен object2'
    );
  },
};
// object.showName();
// object1.showName();
// object2.showName();

const object3 = {
  fullName: 'Kiwi',
  showName() {
    const user = {
      showUser: () => {
        console.log('this in showName showName: ', this); // забирает this из оБласти видимости object2;
        console.log('забирает this из оБласти видимости object2');
      },
    };
    user.showUser();
  },
};
// object3.showName();
// ******************** constructor data property of an object ********************
const guest = function (name) {
  this.name = name;
  console.log('this: ', this);
};
// new guest('MJ');

const guest1 = name => {
  this.name = name;
  console.log('this: ', this);
};
// console.log('Arrow function is not a constructor');
// new guest1('MJ');
