//! For each loops
const coding = ["JavaScript", "Python", "Java", "C++", "C#"];

// 1st way
coding.forEach(function (value) {
  console.log(value);
});
// 2nd way
coding.forEach((value) => {
  console.log(value);
});
// 3rd way
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//! [{}, {}, {}] Important
const myCoding = [
  {
    name: "JavaScript",
    rank: 1,
  },
  {
    name: "Python",
    rank: 2,
  },
  {
    name: "Java",
    rank: 3,
  },
  {
    name: "C++",
    rank: 4,
  },
  {
    name: "C#",
    rank: 5,
  },
];
myCoding.forEach((item) => {
    console.log(item.name);
});
