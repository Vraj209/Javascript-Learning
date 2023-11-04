// Closure: Child takes value(Ice-cream) from parent but parent can't take value(Ice-Cream) from child
function one() {
  const username = "Vraj";
  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website); error
  two();
}
one();

if (true) {
  const userName = "Vraj";
  if (userName === "Vraj") {
    const website1 = "Youtube";
    console.log(userName + " " + website1);
  }
  //   console.log(website1); // error
}
// console.log(userName); // errror

// ! ============== Intersting =================

console.log(addOne(5)); // 6
function addOne(num1) {
  return num1 + 1;
}


// ! ============== Intersting =================
// Expression
addTwo(5); // error
const addTwo = function (num) {
    return num + 2;
};
addTwo(5); // 7
