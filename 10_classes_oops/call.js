function setUsername(username) {
  //  complex db callls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("vraj", "v@fb.com", "123");
console.log(chai);
