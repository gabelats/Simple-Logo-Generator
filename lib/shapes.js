class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx='110' cy='110' r='80' fill='${this.color}'/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width='100' height='100' x='50' y='50' fill='${this.color}'/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points='90, 0 15, 180 180, 180' fill='${this.color}'/>`;
  }
}

module.exports = { Circle, Square, Triangle };
