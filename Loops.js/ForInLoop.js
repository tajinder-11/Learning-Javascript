const obj = {
  fruit1: 'Apple',
  fruit3: 'Banana',
  fruit4: 'Orange',
  fruit5: 'Litchi',
  fruit6: 'Melon',
};
for (const key in obj) {
  console.log(key, obj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow', 'purple'];

for (const color in colorArr) {
  console.log(color, colorArr[color]);
}
