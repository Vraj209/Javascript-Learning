// if
// < , > , <= , >= , == , === , != , !==

const isUserLoggedIn = true;
const temperature = 30;
if (temperature < 50) {
  console.log("Wear a jacket");
} else {
  console.log("No need to wear a jacket");
}
console.log("Hello World");

/*  */
/* const score = 200 */
/* if (score > 100) { */
/*     const power = "fly" */
/*     console.log(`User has ${power} power`); */
/* } */
// console.log(`User has ${power} power`); // error in scope

const balance = 1000;
// Implicit scope
if (balance > 5000) console.log("test");

if (balance < 500) {
  console.log("Low balance");
} else if (balance < 1000) {
  console.log("Medium balance");
} else {
  console.log("High balance");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("User can make a purchase");
} else {
  console.log("User cannot make a purchase");
}
// Multiple conditions check
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User can make a purchase");
} else {
  console.log("User cannot make a purchase");
}
