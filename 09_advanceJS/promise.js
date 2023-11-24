// fetch().then().catch().finally()

// two part of promise
// 1. Creating promises
// 2. Consume Promises

// Creating promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Db  calls, cryptography , network calling
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // connect reslove to .then
  }, 1000);
});
// consume promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

// ===============

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// ==================

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "vraj",
      email: "vraj@gmail.com",
    });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// ================

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "vraj panchal", password: "123456" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

//   ====================

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123456" });
    } else {
      reject("ERROR : Javascript went wrong");
    }
  }, 2000);
});
// async await do not directly handle error
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consumePromiseFive();

// ======================== Important
// fetch return promise
async function getAllUser() {
  try {
    const response = await fetch("https://api.github.com/users/vraj209");
    // string to json
    // console.log(response);
    const data = await response.json(); // convert takes time that why we need to wait
    // assig to data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();


// ======================== Important
fetch("https://api.github.com/users/vraj209").then((response) => {
    return response.json()
}).then((data) =>
{
    console.log(data);
})
    .catch((error) => {
    console.log(error);
})