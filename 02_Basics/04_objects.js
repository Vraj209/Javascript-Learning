// const tinderUser = new Object(); // Signleton object {}
const tinderUser = {}; // Non-Signleton object {}
tinderUser.id = "123abc";
tinderUser.name = "vraj";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "v@gamil.com",
  fullname: {
    userFullname: {
      firstName: "vraj",
      lastName: "panchal",
    },
  },
};
console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = { obj1, obj2 }  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({}, obj1, obj2); //! Not most used
console.log(obj3);
const obj4 = { ...obj1, ...obj2 }; //! Most used
console.log(obj4);

const users = [
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
  {
    id: 1,
    name: "vraj",
    email: "c@gmail.com",
  },
];

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //! Datatype is array
console.log(Object.values(tinderUser)); //! Datatype is array
console.log(Object.entries(tinderUser)); //! Datatype is array

console.log(tinderUser.hasOwnProperty("id"));

// Object Destructure

const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructure: "Vraj Panchal",
};

// course.courseName
const { courseInstructure : instructor} = course;
console.log(instructor);

// {
  // "name": "vraj",
    // "courseName": "JS in Hindi",
      // "price":"999"
// }
// 
// [
  // {},{}
// ]