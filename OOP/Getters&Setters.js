class Person {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${(this._password = 'ghjnu')}h4ajx5af`;
  }

  set password(value) {
    this._password = value;
  }
  get email() {
    return `${(this._email = 'qvoyalf')}`;
  }
  set email(value) {
    this._email = value;
  }
}

const john = new Person('john@gmail.com', 'johny$th');
console.log(john.email);
console.log(john.password);
