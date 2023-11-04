const user = {
  // this -> Current object
  userName: "vraj",
  price: 999,
  welocmeMessage: function () {
      console.log(`${this.userName} , welcome to our website`);
    //   console.log(this);
  },
};
// user.welocmeMessage();
// user.userName = "Sam"; // context change
// user.welocmeMessage();

// console.log(this); // {} empty object
// console.log(this); // window object => browser

// ! ============== Intersting =================
//
// function one() {
    // let userName = "Vraj";
    // console.log(this.userName); // undefined
// }
// one();

// ! ============== Intersting =================

const one = () => {
    let userName = "Vraj";
    console.log(this); // {}
    console.log(this.userName); // undefined
}
one()


// ! ============== Intersting =================

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(1, 2)); // 3

//! Implicit return
// const addThree = (num1, num2) => num1 + num2;

// const addThree = (num1, num2) => (num1 + num2); // ! Usefull in react
// const addThree = (num1, num2) => {userName:"vraj"}; // undefined
const addThree = (num1, num2) => ({userName:"vraj"}); //
console.log(addThree(1, 2)); // 3


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myArray.forEach()