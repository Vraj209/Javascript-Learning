const userEmail = 0

if(userEmail){
    console.log("Email is valid");
} else {
    console.log("Please provide a valid email");
}

//! Falsy values:
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

//! Truthy values:
// true
// "0"
// "false"
// " " -> with space
// []
// {}
// function(){} -> empty function

if(userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/* false == 0 */
/* true */
/* false == "" */
/* true */
/* 0 == "" */
/* true */

//! Nullish coalescing operator(??) : null or undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15;
console.log(val1);


// ! Ternary operator
// condition ? true : false;
const icedTea = 100;
icedTea >= 100 ? console.log("Iced tea is available") : console.log("Iced tea is not available");