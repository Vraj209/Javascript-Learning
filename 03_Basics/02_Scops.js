// var c = 300;
//globle scope
let a = 300;
if (true) {
  // block scope
  let a = 10;
  const b = 20;
  //   c = 30;
  console.log("Innner", a);
}
console.log("Outter", a);
// console.log(b); error
// console.log(c);  30

//node and browser scope are diffrent