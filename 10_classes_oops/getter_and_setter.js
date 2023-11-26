// RangeError: Maximum call stack size exceeded
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}`;
  }
  set password(value) {
    this._password = value;
  }
}

const vraj = new User("vraj@gmail.com", "abc");
console.log(vraj.password);
console.log(vraj.email);
