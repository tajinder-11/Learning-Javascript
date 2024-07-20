// function sayHello() {
//   console.log('hello tajinder');
// }
// sayHello();

// function add(x, y) {
//   let sum = x + y;
//   console.log(sum);
// }

//Default parameters
// function registerUser(user = 'Bot') {
// //   if (!user) {
// //     user = 'bot';
// //   }
//   return user + ' is registered';
// }
// console.log(registerUser());

// Rest Parameter
// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total = total + num;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// Passing objects as parametrs
function loginUser(user) {
  return `The user ${user.naam} is logged
    in with id number ${user.id}`;
}
const user = {
  id: 1,
  naam: 'Jack',
};
console.log(loginUser(user));

//Passing arrays as parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);
