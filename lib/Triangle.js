const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Triangle.prototype.setColor = (color) => {
    this.fill = color;
}

Triangle.prototype.render = () => { 
    console.log(`<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`);
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`;
};

module.exports = Triangle;
