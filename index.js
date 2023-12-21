const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textEL = "";
    this.shapeEl = "";
  }
  render() {
    return `<svg height='300' width='200'>${this.shapeEl}${this.textEL}</svg>`;
  }
  setText(text, color) {
    this.textEL = `<text fill='${color}'>${text}</text>`;
  }
  setShape(shape) {
    this.shapeEL = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: enter up to 3 characters",
  },
  {
    type: "input",
    name: "text-color",
    message: "text-color: enter a color keywlrd or a hexadecimal number",
  },
  {
    type: "list",
    name: "image-shape",
    message: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "Shape Color: enter a color keywlrd or a hexadecimal number",
  },
];
function start(){
    
}
start()
