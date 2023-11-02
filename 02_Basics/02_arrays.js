const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel.push(dc) // push in same array
console.log(marvel); //! nested array [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel[3][1]);

// concate
const all_heros = marvel.concat(dc); // create a new array
console.log(all_heros);

//! spread operator - glass of water breake
const all_heros1 = [...marvel, ...dc];
console.log(all_heros1);

//! flat
const a1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const a2 = a1.flat(Infinity);
console.log(a2);

//! Array.isArray and Array.from()
console.log(Array.isArray("Vraj"));
console.log(Array.from("Vraj"));
console.log(Array.from({ name: "vraj" })); // ! Intersting []

// ! Array.of()
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
