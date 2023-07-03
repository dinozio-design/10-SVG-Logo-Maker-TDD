const Triangle = require('./Triangle.js');

function svGenerator(data) {
    console.log(data);
    if(data.shape ==='triangle'){
        const shape = new Triangle();
        shape.setColor(data.shapeColor);
        shape.render();
    }

    return 
    /*`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textCol}">${text}</text>

</svg>`; */
}

module.exports = svGenerator;

// // this will generate the svgMarkdown using tested and verified data

// //static
// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`

// //if Circle:
// `<circle cx="150" cy="100" r="80" fill="green" />`
// `<circle cx="25" cy="75" r="20"/>` //dont use, only for scale

// //if rect /** coordinates to be adjusted */
// `<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`

// //if triangle /** coordinates to be adjusted */
// `<polygon points="50, 160 60, 180 70, 160 "/>`

// //for text
// `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`

// //static
// `</svg>`


//must bring out these two into their own subroutines:
//shape, shapeColor
// perhaps best is to use classes for this purpose and separate it into another module maybe....
// I think I have figured it out... too bad not enough time to finish it now ... must wait till the weekend...