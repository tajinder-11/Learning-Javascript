//Challenge 1
// converting the temprature farenheight to celcius.
const celcius = (f) => ((f - 32) * 5) / 9;
console.log('The tempreture in celcius is :' + celcius(200));

// challenge 2
// finding the minimun and maximum elements from the array.
const minMax = (arr) => {
  const min = Math.min(...arr);
  console.log(min);
  const max = Math.max(...arr);
  console.log(max);
  return {
    min,
    max,
  };
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(minMax(arr));

((length, width) => {
  const area = length * width;
  const output = `The area of rectangle with a length of ${length}
   and a width of ${width} is : ${area}`;
  console.log(output);
})(10, 10);
