class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log('Shape Name', this.name);
  }
}
//Sub Class inherits properties of class Shape
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}
//Sub class inherits properties of class shape
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  logName() {
    console.log('Circle Name', this.name);
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
const circ = new Circle('circle 1', 30);
console.log(rect);
rect.logName();
console.log(circ);
circ.logName();
