// let myName = "vraj           "
// console.log(myName.trueLength());

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.vraj = function () {
  console.log(`vraj is present in all objects`);
};
Array.prototype.heyVraj = function () {
  console.log(`Hey Vraj`);
};

// heroPower.vraj()
// heroPower.heyVraj() - error you only provided array power
myHero.vraj();
myHero.heyVraj();

// Inheritance
const User = {
  name: "Ramesh",
  email: "ramesh@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
    makeAssignment: "Js Asssigment",
    fullTime: true,
    __proto__ :TeachingSupport
};

Teacher.__proto__ = User

// Modern
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiorcode      "
String.prototype.trueLength = function () {
    console.log(`${this}`);
   
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"vraj".trueLength()
"Shefali      ".trueLength()