const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');
const Text = require('./Text.js');

function svGenerator(data) {
    const { text, textCol, shapeForm, shapeCol } = data;
    var svgSetup = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    var svgShape = "";
    var svgContent = "";
    var asnwer = "";

    const svgText = new Text()
    svgText.setColor(textCol);
    svgContent = svgText.render();

    if (shapeForm === 'triangle') {
        const shape = new Triangle();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    } else if (shapeForm === 'square') {
        const shape = new Square();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    } else if (shapeForm === 'circle') {
        const shape = new Circle();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    }

    return `${svgSetup}\n
    ${svgShape}\n
    ${svgContent}${text}</text>\n
</svg>`;
}

module.exports = svGenerator;

