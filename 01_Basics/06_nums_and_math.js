const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num1 = 12.2564
console.log(num1.toPrecision(4)); // Value Roundof

const hundres = 1000000;
console.log(hundres.toLocaleString("en-US")); 
console.log(hundres.toLocaleString("en-IN")); 

// ! ********************** Maths ********
console.log(Math)
console.log(Math.abs(-5)); // negative to positive
console.log(Math.abs(5)); // positive 
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random()); // 0 - 1
console.log(Math.floor((Math.random() * 10) + 1)); // 0 - 1
//! Important
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()  * (max - min + 1) + min ));
