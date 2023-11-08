//! for of -> Array specifice

// ["", "", ""]
// [{}, {}, {}]
// Array
const arr = ["Flash", "Batman", "Superman", "Ironman"];
for (const name of arr) {
  console.log(name);
}
// String
const greeting = "Hello World";
for (const greet of greeting) {
  console.log(greet);
}

//! Maps
// No duplicatation
// Same Order
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India"); // Not Printing
console.log(map);
for (const key of map) {
  console.log(key);
}
for (const [key, value] of map) {
  console.log(key, "->", value);
}

//! Object -> Not iterable
const obj = {
  game1: "Cricket",
  game2: "Football",
  game3: "Hockey",
};
for (const [key, value] of obj) {
  console.log(key, "->", value);
}
