const User = {
  _email: 'john@gmail.com',
  _password: 'abcd',

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const user = Object.create(User);
console.log(user.email);
