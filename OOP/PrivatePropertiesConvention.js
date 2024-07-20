class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }
  widthraw(amount) {
    if (amount > this._balance) {
      console.log('Not Enough balance');
      return;
    }
    this._processWidthraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.transactions.push({
      type: 'Deposit',
      amount,
    });
  }

  _processWidthraw(amount) {
    console.log(`Widthrawing ${amount}`);

    this.transactions.push({
      type: 'Widthraw',
      amount,
    });
  }
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.widthraw(200);
console.log('Balance:', wallet.balance);
console.log(wallet.transactions);
