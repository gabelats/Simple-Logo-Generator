const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("Renders a blue circle", () => {
    const shape = new Circle();
    const expectedShape = "<circle cx='150' cy='100' r='80' fill='blue'/>";
    shape.setColor("blue");
    expect(shape.render()).toEqual(expectedShape);
  });
});
describe("Square", () => {
  test("Renders a green Square", () => {
    const shape = new Square();
    const expectedShape = "<rect x='100' y='100' fill='green'/>";
    shape.setColor("green");
    expect(shape.render()).toEqual(expectedShape);
  });
});
describe("Triangle", () => {
  test("Renders a red triangle", () => {
    const shape = new Triangle();
    const expectedShape =
      "<polygon points='100, 18 244, 182 56, 182' fill='red'/>";
    shape.setColor("red");
    expect(shape.render()).toEqual(expectedShape);
  });
});
