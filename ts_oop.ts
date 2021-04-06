class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point(0, 0);
console.log(`${pt.x}, ${pt.y}`);

class Place extends Point {
  name: string;
  constructor(x: number, y: number, name: string) {
    super(x, y);
    this.name = name;
  }
}

var kash = new Place(0, 0, "Nashua");
console.log(`${kash.name}`);
