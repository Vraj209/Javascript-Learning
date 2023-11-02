// Two ways to create objects
// Literals - no singleton
// Constuctor - singleton

// Object.create
// object Constructor

// object Literals
const sym = Symbol("key");
const JsUser = {
  name: "vraj",
  fullName: "Vraj Panchal",
  [sym]: "mykey1", // Using []
  age: 20,
  location: "Vadodara",
  email: "vraj@gmail.com",
  isLoggedin: false,
  lastLoggin: ["Monday", "Tuesday", "Wednesday"],
};

// Accessing object properties
console.log(JsUser.email);
console.log(JsUser["email"]); // Behind the scene object property is converted to string
console.log(JsUser["fullName"]);
console.log(typeof JsUser.sym); //!String
console.log(JsUser[sym]);

console.log(JsUser.email);
//! Object.freeze(JsUser); // Freeze the object
JsUser.email = "v@google.com";
console.log(JsUser.email); // No change
console.log(JsUser); 

JsUser.greeting = function () {
  console.log("Hello JS User");
}
// String Interpolation
JsUser.greetingTwo = function () {
    console.log(`Hello JS User ${this.name}`);
}
  
console.log(JsUser.greeting); // Undefined
console.log(JsUser.greeting()); // Hello JS User
console.log(JsUser.greetingTwo()); // Hello JS User vraj
