const Square = require('../Square.js');

describe('Square', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="80" y="40" width="130" height="130" fill="blue" />');
        });
    });
});