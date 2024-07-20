const firstName = 'John';
const lastName = 'Doe';
const age = 34;

// If the key name and value are the same so we dont need to write the value.
const person = {
  firstName,
  lastName,
  age,
};

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',

  work: {
    type: 'carpenter',
  },
};

const { id, title, work: type } = todo;

// Destructuring Arrays

// const numbers = [12, 34, 54, 87, 34];

// const [first, second, third, fourth] = numbers;

// console.log(first, second, third, fourth);

// Rest Operator
// Gives us remaining values as an array.
const num = [23, 44, 67, 98, 31];

const [one, two, ...rest] = num;

console.log(one, two, rest);
