// 1st way of object creation.
const person = {
  name: 'Tajinder Singh',
  age: 30,
  isAdmin: true,
  address: {
    vill: 'Baghoura',
    distt: 'Hoshiarpur',
    state: 'Punjab',
  },
  hobbies: ['singing', 'Cricket', 'Guitar Playing'],
};
person.married = 'false';
person.education = 'B.tech';
person.greet = function greeting() {
  console.log(`Hello my name is ${this.name}`);
};
const ans = person.greet();
console.log(ans);

// 2nd way of object creation
const restaurant = {};
restaurant.italian = 'pizza';
restaurant.chinese = 'noodles';
restaurant.indian = 'rajmah';
restaurant.drink = 'cokacola';
console.log(restaurant);

// 3rd way object constructor
const sport = new Object();
sport.name = 'Football';
sport.origin = 'England';
sport.type = 'outdoor';
sport.duration = '90 minutes';

//Nesting of the objects
const person1 = {
  address: {
    coords: {
      lattitude: 42.9384,
      longitude: -71.3232,
    },
  },
};
const access = 'Lattitude : ' + person1.address.coords.lattitude;
console.log(access);

// Spread operator in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Array of objects
const players = [
  { id: 1, name: 'Tajinder' },
  { id: 2, name: 'Sagar' },
  { id: 3, name: 'Prabhjot' },
];

console.log(players[2].name);

const keys = Object.keys(sport); // Returns array of keys of the object.
console.log(keys);

const values = Object.values(players); // Return array of values of the object.
console.log(values);

const keyValue = Object.entries(players); // Return array of key-value pair of the object.
console.log(keyValue);
