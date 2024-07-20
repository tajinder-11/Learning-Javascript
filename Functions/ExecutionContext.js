const x = 100;
const y = 200;

function sum(n1, n2) {
  const sum = n1 * n2;
  return sum;
}

const sum1 = sum(x, y);
const sum2 = sum(10, 20);

console.log(sum1, sum2);

// Call Stack

function first() {
  console.log('first function');
  second();
}

function second() {
  console.log('second function');
  second();
}

function third() {
  console.log('third function');
}

first();
