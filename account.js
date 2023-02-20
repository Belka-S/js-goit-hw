const account = {
  balance: 0,
  transactionNumber: 0,
  transactionId: Date.now(),
  transactionTypes: { deposit: 'deposit', withdraw: 'withdraw' },
  transactions: [],

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  createTransaction(amount, type) {
    this.transactionNumber += 1;
    const tansaction = {
      // time: 0,
      number: this.transactionNumber,
      id: this.generateId(),
      type: type,
      amount: amount,
      balance: this.balance,
    };
    return tansaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(
      this.createTransaction(amount, this.transactionTypes.deposit)
    );
    console.log(`Deposited ${amount}, balance ${this.balance}`);
  },

  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, this.transactionTypes.withdraw)
      );
      console.log(`Withdrawn ${amount}, balance ${this.balance}`);
    } else return console.log('Denied');
  },

  get history() {
    console.table(this.transactions);
  },

  findNumber(number) {
    this.transactions.some(transaction => transaction.number === number)
      ? console.log(
          this.transactions.find(transaction => transaction.number === number)
        )
      : console.log('Can not find transattion');
  },

  totalOfType(type) {
    const sum = this.transactions
      .filter(transaction => transaction.type === type)
      .reduce((acc, transaction) => {
        acc += transaction.amount;
        return acc;
      }, 0);
    console.log(`Total of "${type}" transactions = ${sum}`);
  },
};

// console.table(account);
// account.deposit(100);
// account.withdraw(60);
// account.deposit(200);
// account.withdraw(80);
// account.history;
// account.findNumber(3);
// account.findNumber(9);
// account.totalOfType('deposit');
