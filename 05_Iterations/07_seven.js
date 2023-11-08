const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// It will return value
const num = myNumber.map((num) => {
  return num * 2;
});
console.log(num);


// chiaining -> pass value one to two
const newNum = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 20);
console.log(newNum);
