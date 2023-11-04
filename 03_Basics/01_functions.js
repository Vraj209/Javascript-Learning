function sayMyName() {
  console.log("V");
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("P");
  console.log("V");
  console.log("V");
  console.log("V");
  console.log("V");
}
// sayMyName -> Referance
// sayMyName() -> Execution

sayMyName();

// function sum(a, b) {
//   a, b -> Parameters
//   console.log(a + b);
// }
function sum(a, b) {
  let result = a + b;
  return result;
}
const result = sum(1, 2); // 1, 2 -> Arguments
console.log(result); // undefined

function loginUserMesage(username = "sam") {
  if (username === undefined) {
    return "Please provide a username";
  } else {
    return `${username} just logged in`;
  }
}
console.log(loginUserMesage("vraj"));


// Rest parameter
function calculateCartPrice(...num1) {
  return num1; // !return array
}
console.log(calculateCartPrice(200, 300, 400, 500));

// const user = {
    // username: "vraj",
    // email: "v@gmail.com"
// }
// 
function handleObject(anyUser){
    console.log(`Username is ${anyUser.username} and email is ${anyUser.email}`);
}

// handleObject(user);
handleObject({
    username: "vraj",
    email: "V@gmail.com"
});

const myNewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function handleArray(arr) {
  return arr[1]
}

console.log(handleArray(myNewArr))