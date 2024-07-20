const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = number.reduce((acc, curr) => acc + curr);
// console.log(sum);

const cart = [
  { id: 1, name: 'Product1', price: 130 },
  { id: 2, name: 'Product2', price: 150 },
  { id: 3, name: 'Product3', price: 175 },
];

const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(`The total price is : $${totalPrice}`);
