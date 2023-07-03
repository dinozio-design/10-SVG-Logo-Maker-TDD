const Square = require('../Square.js');

describe('Square', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="50" y="50" width="160" height="160" fill="blue" />');
        });
    });
});