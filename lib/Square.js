const Shape = require('./Shape');

class Square extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Square.prototype.setColor = (color) => {
    this.fill = color;
}

Square.prototype.render = () => { 
    // console.log(`<rect x="50" y="50" width="160" height="160" fill="${this.fill}" />`);
    return `<rect x="50" y="50" width="160" height="160" fill="${this.fill}" />`;
};

module.exports = Square;