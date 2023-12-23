const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const { log } = require("console");
class Svg {
  constructor() {
    this.textEL = "";
    this.shapeEL = "";
  }
  render() {
    return `<svg height='300' width='200'>${this.shapeEL}${this.textEL}</svg>`;
  }
  setText(text, color) {
    this.textEL = `<text x='50' y='150' font-size='80' fill='${color}'>${text}</text>`;
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
    name: "textColor",
    message: "text-color: enter a color keyword or a hexadecimal number",
  },
  {
    type: "list",
    name: "imageShape",
    message: "What shape would you like?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Shape Color: enter a color keyword or a hexadecimal number",
  },
];
function start() {
  inquirer.prompt(questions).then((answers) => {
    let choice = answers.imageShape;
    let logo;
    switch (choice) {
      case "Circle":
        logo = new Circle();
        break;
      case "Square":
        logo = new Square();
        break;
      case "Triangle":
        logo = new Triangle();
        break;
    }
    logo.setColor(answers.shapeColor);
    console.log(logo);
    const finalLogo = new Svg();
    finalLogo.setShape(logo);
    console.log(finalLogo);
    finalLogo.setText(answers.text, answers.textColor);
    console.log(finalLogo);
    if (answers.text.length > 3) {
      console.error({ message: "Can't be more than three characters" });
      start();
    } else {
      fs.writeFileSync("logo.svg", finalLogo.render());
    }
  });
}
start();
