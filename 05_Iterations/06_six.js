/**
 * const coding = ["JavaScript", "Python", "Java", "C++", "C#"];
// No Value returned
const values = coding.forEach((item) => {
    console.log(item);
    return item
});
console.log(values); // undefined
 */

// Filter
const num = [1, 2, 3, 4, 5];
const newNum = num.filter((num1) => num1 > 4)

const new1 = []
num.forEach((num) => {
    if (num > 5) {
        new1.push(num)
    }
})
console.log(newNum);

const books = [
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25,
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42,
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11,   
    }
]

const goodBooks = books.filter((b) => {
 return b.rating > 4.0
})
console.log(goodBooks);