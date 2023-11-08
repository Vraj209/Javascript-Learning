// Reduce() method
// Usefull in shopping cart, adding up all the prices of the items in the cart

const num = [1, 2, 3];
const total = num.reduce((acc, currval) => {
  console.log(`Accumulator: ${acc} : Current Value: ${currval}`);
  return acc + currval;
}, 0);

console.log(total);

const shoppingCart = [
  {
    itemName: "iPhone",
    itemPrice: 1000,
  },
  {
    itemName: "MacBook",
    itemPrice: 2000,
  },
  {
    itemName: "iMac",
    itemPrice: 3000,
  },
  {
    itemName: "iPad",
    itemPrice: 4000,
  },
];
const totalprice = shoppingCart.reduce((acc, item) => {
  return item.itemPrice + acc;
}, 0);
console.log(totalprice);
