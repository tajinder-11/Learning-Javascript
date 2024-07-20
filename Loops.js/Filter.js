const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr.filter((items) => {
  return items % 2 == 0;
});
console.log('Array of even numbers : ' + evenNumbers);

const oddNumbers = arr.filter((items) => items % 2 != 0);
console.log('Array of odd numbers : ' + oddNumbers);
