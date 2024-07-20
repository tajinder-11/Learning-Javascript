Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const rectObj = {
  name: 'Rectangle 1',
  height: 10,
  width: 10,
};

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
// console.log(descriptor);

Object.defineProperty(rectObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});
descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

// rectObj.name = 'New Name';
// console.log(rectObj);
