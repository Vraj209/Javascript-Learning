//! for in loop
// Objects
const obj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    php: "PHP",
    java: "Java",
}
for (const key in obj) {
    console.log(key, "->", obj[key]);
}

// Arrays
const languages = ["JavaScript", "Python", "Ruby", "PHP", "Java"];
for (const index in languages) {
    console.log(index, "->", languages[index]);
}

//! Map -> Not Iterable
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
// map.set("IN", "India"); // Not Printing
for (const key in map) {
    console.log(key);
}