const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("Renders a blue circle", () => {
    const shape = new Circle();
    const expectedShape = "<circle cx='110' cy='110' r='80' fill='blue'/>";
    shape.setColor("blue");
    expect(shape.render()).toEqual(expectedShape);
  });
});
describe("Square", () => {
  test("Renders a green Square", () => {
    const shape = new Square();
    const expectedShape =
      "<rect width='100' height='100' x='50' y='50' fill='green'/>";
    shape.setColor("green");
    expect(shape.render()).toEqual(expectedShape);
  });
});
describe("Triangle", () => {
  test("Renders a red triangle", () => {
    const shape = new Triangle();
    const expectedShape =
      "<polygon points='90, 0 15, 180 180, 180' fill='red'/>";
    shape.setColor("red");
    expect(shape.render()).toEqual(expectedShape);
  });
});
