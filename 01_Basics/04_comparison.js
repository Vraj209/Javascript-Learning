console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

// Convert string to number
console.log("2" > 1);
console.log("02" > 1);

// The reason is that an equality check == and comparisons > < >= <= work diffrently
//Comparisons convert null to a number , treaing it as 0.
// That is why (3) null >= is true and (1) null > 0 is false
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === strickly check -> check datatype -> not conversion
console.log("02" === 2)