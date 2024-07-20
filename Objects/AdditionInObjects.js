// Object literals
// const obj = {
//   name: 'tainder',
//   age: 30,
// };
// console.log(obj);

// using dot(.) operator
// const object = {};
// (object.car = 'mercedes'), (object.city = 'Berlin'), (object.work = 'engineer');
// console.log(object);

// using Square brackets
// const laptop = {};
// laptop['processor'] = 'i5';
// laptop['ram'] = '8gb';
// laptop['storage'] = '512gb';
// laptop['color'] = 'black';
// console.log(laptop);

// Using Functions
// function call(name, age, years) {
//   return {
//     name: name,
//     age: age,
//     years: years,
//   };
// }
// const user = call('tajinder', 11, 2001);
// console.log(user)

// Using prompt
// let user = {
//   name: 'john',
//   age: 20,
// };

// let key = prompt('what do you want to know about the user');
// console.log(user[key]);
// console.log(user);

//Using prompts.
// let name = prompt('Which fruit to buy', 'name');
// let age = prompt('age ', 'age');
// let bag = {
//   [name]: 'Tajinder',
//   [age]: 22,
// };
// console.log(bag[name]);
// console.log(bag.age);

// const person = {
//   name: 'Tajinder',
//   age: 22,
//   address: 'Mahilpur',
// };
// const newName = 'name';
// const newAddress = 'address';
// person[newName] = 'Ravinder';
// person[newAddress] = 'Hoshiarpur';
// console.log(person);
// console.log(person[newName]);
// console.log(person[newAddress]);

/* name */
// console.log([name]);
const sentence1 = "I live in Ramesh's house";
const sentence2 = 'I live in "Ramesh\'s" house';
const friendName = 'Ram';
const townName = 'Mumbai';
const fatherAge = 'fatherAge';
const sum = (a, b) => {
  return a + b;
};

let broName = 'abc';
let brotherName = broName;
console.log(broName);
const user = {
  age: 12,
  height: 20,
  'full name': 'Foo bar',
  'given name': 'Foo',
  //`family name`: 'Bar',
  ['father age']: 40,
  [`${sum(1, 3)}'s house name`]: 'Foo',
  [sum(4, 6) + "'s traffic status"]: 'high',
  [fatherAge]: 23,
  //brotherName: '',
};

user.motherName = 'John';
user.age = 'John';
user['brotherName'] = 'Matt';
user[brotherName] = 'Matt';
user[broName] = 'David';
user[`${sum(1, 3)}'s house name`] = 'David';

console.log(user);

// const age = 10;
// age = 20;
// const userNames = ['asd', 'sdfsdfd', 'sdf', 'sd', 'fsd', 'fsd'];
// userNames[10] = 'zxcv';
// console.log(age);
// console.log(userNames);
