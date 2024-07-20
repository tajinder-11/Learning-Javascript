/*
A prototype is just a special object where additional 
methods and properties can be attached and share across
all instances of its constructor function.
*/

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const rect = new Rectangle('Rect', 10, 10);
console.log(Object.getPrototypeOf(rect));
