// Link : https://262.ecma-international.org/5.1/#sec-11.4.3

// Javascript is Dynamic type langage

// -> How data is store and How data is access based on these we categaried data
// # Primitive -> call by value -> copy store

// 7 types : String ,Number ,Boolean, null, undefined, Symbol ,BigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

const bigNumber = 8946498448949846548998465459n;

// # Non-Primitive -> call by reference -> address store
// Object, Array, Function -> return type object

const heros = ["shaktiman", "naagraj"];
let myObj = {
  name: "vraj",
  age: 23,
};
const myFunction = function () {
  console.log("Hello");
};

console.log(typeof bigNumber);

// ************  Typeof Oprator Result **********

/*
Undefined -> "undefined"
Null -> "object"
Boolean -> "boolean"
Number -> "number"
BigInt -> "bigint"
String -> "string"
Symbol -> "symbol"
Function -> "function"
Object -> "object"
Array -> "object"

*/

// Stack(Primitive)(copy) , Heap(Non Primitive)(Referance - every changing happen in original variable)

let myYoutubeName = "VrajPanchal";
let myYoutubeName2 = myYoutubeName;
myYoutubeName2 = "Shefali Panchal";

console.log(myYoutubeName2);
console.log(myYoutubeName);

let userOne = {
  email: "userone@gmail.com",
  upi: "user@ybl.ca",
};

let userTwo = userOne;
userTwo.email = "vraj@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
