const arr = [];

if (arr.length > 0) {
  console.log('With Elements');
} else {
  console.log('No Elements');
}

const obj = {};

if (Object.keys(obj).length > 0) {
  console.log('Object have elements');
} else {
  console.log('Object does not contain any element');
}

// Loose Equlity
console.log('' === 0);
console.log(null === undefined);
console.log(false === 0);

let user = 'john';

console.log('anonymous' ?? user);
