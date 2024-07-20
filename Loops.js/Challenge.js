const people = [
  {
    firstName: 'John',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    phone: 1234567890,
    age: 30,
  },
  {
    firstName: 'Pepper',
    lastName: 'potts',
    email: 'pepperpotts@gmail.com',
    phone: 1267537890,
    age: 25,
  },
  {
    firstName: 'Elizabeth',
    lastName: 'swan',
    email: 'ealizabeth@gmail.com',
    phone: 2298656789,
    age: 23,
  },
  {
    firstName: 'Jack',
    lastName: 'sparrow',
    email: 'jacksparrow@gmail.com',
    phone: 5234552973,
    age: 21,
  },
];
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + ' ' + '' + person.lastName,
    email: person.email,
  }));
// console.log(youngPeople);

// Sum of all positive numbers in the array.
const arr = [2, -30, 50, 20, -12, -9, 7];
let value = 0;
const sum = arr.map(function sum(item) {
  if (item >= 0) {
    return value + item;
  }
});
// console.log(value);

const sum2 = arr
  .filter((number) => number >= 0)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(sum2);

// First Worls upperCase.

const words = ['coder', 'programmer', 'developer'];
