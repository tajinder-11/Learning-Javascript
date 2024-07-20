class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height * this.width);
  }
  isSquare() {
    return this.width === this.height;
  }
}

const rect = new Rectangle('Rectangle 1', 20, 20);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect);
