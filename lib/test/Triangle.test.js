const Triangle = require('../Triangle.js');

describe('Triangle', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="50, 50 250, 50 150, 200" fill="blue" />');
        });
    });
});