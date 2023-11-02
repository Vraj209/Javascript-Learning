const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["thor", "ironman"];
const myArr1 = new Array(1, 2, 3, 4, 5);

// Array Methods

myArr.push(6);
myArr.pop(6);
console.log(myArr);

myArr.unshift(9);
myArr.shift();
console.log(myArr);

// Question Methods
console.log(myArr.includes(5)); //! true
console.log(myArr.indexOf(5)); //! true

const newArr = myArr.join(); //! conveted into string
console.log(newArr);

// slice , splice
console.log("A:-", myArr);// A:- [ 0, 1, 2, 3, 4, 5 ]
const m1 = myArr.slice(1, 3);
console.log("m1:-",m1); // m1:- [ 1, 2 ]
console.log("B:-", myArr); //B:- [ 0, 1, 2, 3, 4, 5 ]

const m2 = myArr.splice(1, 3);  // Original Array manipulate
console.log("m2:-",m2); //m2:- [ 1, 2, 3 ]
console.log("C:-", myArr); // C:- [ 0, 4, 5 ]
