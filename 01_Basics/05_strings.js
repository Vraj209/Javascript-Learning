// UTF - 16 Table : https://asecuritysite.com/coding/asc2

const name = "vraj";
const repoCount = 50;
// console.log(name + repoCount + "value");

//! String Interpolation - It is behave Like placeholder you can inject your data
console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("vraj-panchal-com");
// It will return string object

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("v"));

const newString = gameName.substring(0, 1);
console.log(newString);

const anotherString = gameName.slice(2, 4);
console.log(anotherString);

const newStringOne = "   vraj     ";
console.log(newStringOne.trim());

const url = "https://vraj.com/vraj%20panchal";
url.replace("%20", "-");
console.log(url.includes("vraj"));

console.log(gameName.split("-"));

// console.log(gameName.anchor("vraj"))

console.log(gameName.at(5));
console.log(gameName.charCodeAt(5)); //integer between 0 and 65535 representing the UTF-16 code
console.log(gameName.codePointAt(4));

//!The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
console.log(gameName.endsWith("com"));
console.log(gameName.endsWith("mail"));

//!The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(189, 43, 190, 61));

//! localeCompare()
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase
console.log(a.localeCompare(b));

//! The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2test3";
const array = [...str.matchAll(regexp)];
console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]
console.log(array[2]);
// Expected output: Array ["test2", "e", "st2", "2"]

//! The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
const str1 = "vraj Panchal";
console.log(str1.padEnd(25, "."));

//! The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
const cardNumber = "1234567891215648";
const lastFourDigit = cardNumber.slice(-4);
const maskedNumber = lastFourDigit.padStart(cardNumber.length, "*");
console.log(maskedNumber);

//! String.raw()
const filePath = "C:Developmentprofileaboutme.html";
console.log(filePath); // C:Developmentprofileaboutme.html
const filePath1 = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath1}`);

//! The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // I feel Happy! Happy! Happy!

//! search()
//! The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// Expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."

//! startsWith()
//* The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
const str2 = "Saturday night plans";

console.log(str2.startsWith("Sat"));
// Expected output: true

console.log(str2.startsWith("Sat", 1));
// Expected output: false

//! toString() : values returns this string value
const stringObj = new String("foo");
console.log(stringObj);
// Expected output: String { "foo" }
console.log(stringObj.toString());
// Expected output: "foo"

//! valueOf() :  values returns this string value
const stringObj1 = new String("foo");
console.log(stringObj);
// Expected output: String { "foo" }
console.log(stringObj1.valueOf());
// Expected output: "foo"
