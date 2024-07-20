function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.periemter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};
Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rectangle 1', 10, 10);
const rect2 = new Rectangle('Rectangle 2', 20, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.periemter());
console.log(rect.isSquare());
console.log(rect.changeName('john'));
console.log(rect2.area());
