const Triangle = require('../Triangle.js');

describe('Triangle', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});