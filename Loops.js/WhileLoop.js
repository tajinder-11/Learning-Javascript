let k = 1;

while (k <= 20) {
  console.log(k);
  k++;
}

// Nested While Loop

let i = 1;
while (i <= 10) {
  console.log('number' + i);

  let j = 1;
  while (j <= 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
