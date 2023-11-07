// for
// for (let i = 0; i < 10; i++) {
// const element = i;
// if (element == 5) {
// console.log("5 is best number")
// }
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop ${j} and outer loop ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

// !Array Iterations
let myArr = ["Flash", "Batman", "Superman", "Ironman"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

//! break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("5 is best number");
    break;
  }
  console.log(`Value of index is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("5 is best number");
    continue;
  }
  console.log(`Value of index is ${index}`);
}
