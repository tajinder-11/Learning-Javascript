//Sealing-Prevents properties from being addded or removed. Can still be changed.

//Freezing-Prevents Properties from being adddesd, removed or changed.

const rectObj = {
  name: 'Rectangle',
  width: 10,
  height: 10,
};
Object.seal(rectObj);
let descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

const circObj = {
  name: 'Circle',
  radius: 30,
};

Object.freeze(circObj);
descriptor = Object.getOwnPropertyDescriptor(circObj, 'name');
console.log(descriptor);
