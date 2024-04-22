export class BankAccount {
  constructor() {
    this.isOpen = false;
    this.value;
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.value = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(money) {
    if (this.isOpen && money > 0) {
      this.value += money;
    } else {
      throw new ValueError();
    }
  }

  withdraw(money) {
    if (this.isOpen && money <= this.value && money > 0) {
      this.value -= money;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.isOpen) {
      return this.value;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
