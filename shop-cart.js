//  // ******************** Objects ******************** //

const cart = {
  items: [],
  countTotalSumm() {
    let totalSumm = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      totalSumm += this.items[i].price * this.items[i].quantity;
    }
    console.log(`total Summ = ${totalSumm}$`);
    console.log('-----------------');
  },
  getItems() {
    console.table(this.items);
    this.countTotalSumm();
  },
  add({ name, price }) {
    const product = { name, price, quantity: 1 };
    for (const item of this.items) {
      if (item.name === name) {
        console.log(`1 ${name} for ${price}$ is added`);
        return (item.quantity += 1);
      }
    }
    this.items.push(product);
    console.log(`1 ${name} for ${price}$ is added`);
  },
  increaseQuantity(name) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === name) {
        console.log(
          `1 ${this.items[i].name} for ${this.items[i].price}$ is added`
        );
        this.items[i].quantity += 1;
      }
    }
  },
  decreaseQuantity(name) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === name) {
        if (this.items[i].quantity === 1) {
          this.remove(name);
        } else {
          console.log(
            `1 ${this.items[i].name} for ${this.items[i].price}$ is removed`
          );
          this.items[i].quantity -= 1;
        }
      }
    }
  },
  remove(name) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === name) {
        console.log(
          `${this.items[i].quantity} ${name} for ${this.items[i].price}$ is removed`
        );
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
    console.log('Cart is empty!');
  },
};
// -----------------------------------------------------------------------------
const basketBalls = [
  { name: 'Nike', price: 75 },
  { name: 'Spalding', price: 100 },
  { name: 'Wilson', price: 65 },
  { name: 'The Rock', price: 50 },
];
const [nike, spalding, wilson, rock, molten = { name: 'Molten' }] = basketBalls;
// -----------------------------------------------------------------------------
// cart.add(molten);
// cart.add(spalding);
// cart.add(wilson);
// cart.add(wilson);
// cart.add(rock);
// cart.add(nike);
// cart.increaseQuantity('Nike');
// cart.getItems();
// cart.remove('Molten');
// cart.decreaseQuantity('Spalding');
// cart.decreaseQuantity('Wilson');
// cart.getItems();
// cart.clear();
// cart.getItems();
