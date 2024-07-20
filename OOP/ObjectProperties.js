function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 1', 30, 30);
console.log(rect1.width, rect1.height);

//Add Property
rect1.color = 'red';
rect2.perimeter = () => 2 * (rect2.width + rect2.height);

//Delete Property
delete rect2.perimeter;

// Check for Property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get the keys of our objects
console.log(Object.keys(rect1));
// Get the values of objects
console.log(Object.values(rect1));
// Get the keys and values of objects
console.log(Object.entries(rect1));

for (let [keys, values] of Object.entries(rect1)) {
  if (typeof values !== 'function') {
    console.log(`${keys} = ${values}`);
  }
}
