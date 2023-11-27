const myArray = [] % DebugPrint(myArray);

// continious, Holy

// SMI(small integer)
// Packed Element
// Double (float,string, function)

const arrTwo = [1, 2, 3, 4, 5, 6];
// Packed_smi_element -> best Optimize version -> all number

arrTwo.push(6.0);
// Packed_Double_element

arrTwo.push("7");
// Packed_element

// If you make your array packed_element and Packed_Double_element you cant upgrade to packed_smi_element

arrTwo[10] = 11;
// Holy_element

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// Bound Check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,9)
// hasOwnProperty(Object.prototype,9)

// holes are ery expensive in Javascript

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// SMI > Double > Packed -> Continous
// H_SMI > H_Double > H_Packed -> Holy

const arrFour = new Array(3);
// Just 3 holes. HOLY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLY_ELEMENTS
arrFour[1] = "1"; // HOLY_ELEMENTS
arrFour[2] = "1"; // HOLY_ELEMENTS
// Better version
const arrFive = [];
arrFive.push("1"); // Packed_ELEMENT
arrFive.push("2"); // Packed_ELEMENT
arrFive.push("3"); // Packed_ELEMENT

const arrSix = [1, 2, 3, 4, 5];
// arrSix.push(Nan) Packed_Double
// arrSix.push(Infinity)

// for,for-of,forEach
