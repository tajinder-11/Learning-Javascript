//Arrow functions
const add = (a, b) => {
  // This is explicit return because we are specifying return keyword.
  return a + b;
};
console.log(add(1, 2));

const subtract = (a, b) => a - b; // This is implicit return because we are not specifying return keyword.
console.log(subtract(10, 5));

// If we want to return the objects we need to add round brackets before curly braces.
const obj = () => ({
  name: 'john',
  age: 22,
  class: 'bca',
  semester: 5,
});
console.log(obj());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((n) => console.log(n));
