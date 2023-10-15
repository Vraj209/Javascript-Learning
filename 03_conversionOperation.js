let score = "Vraj";

console.log(typeof score);

let valueInNumber = Number(score); // Not reliable
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN => type - number
// true => 1 false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//  1 => true 0 =>false
// "" => false
// "Vraj" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string
