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

// ********** Operations *************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello";
let str2 = " vraj";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // All String 122
console.log(1 + 2 + "2"); // 32

// trick conversion - not usefull
console.log(+true); // 1
// console.log(true+); // err
console.log(+""); // 0

// Not readable
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; //postfix
++gameCounter; //prefix
console.log(gameCounter);
