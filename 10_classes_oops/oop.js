// Object literal
const user = {
    username: "vraj",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user detailed");
        // console.log(`Username: ${this.username}`);
        console.log(this); // function context
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // this {}

//  new :- constructor function
//  with one object litreal you can make multiple instance
// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}
// Give me new Instance : new
// when you write new keyword
// 1. create empty object created it called instance
// 2. It called constructor function
// 3. Inject in to function
// 4. return
const userOne = new User("Vraj", 12, true)
const userTwo = new User("Viraj", 11, false)
console.log(userOne.constructor); 
// Instance of
// console.log(userTwo);