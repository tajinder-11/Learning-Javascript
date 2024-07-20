const rectangle = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};
// console.log('The area of rectangle is:', rectangle.area());

// multipale instances of same object

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1.area());
const rect2 = new Rectangle('Rectangle 2', 20, 20);
console.log(rect2.area());

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);
