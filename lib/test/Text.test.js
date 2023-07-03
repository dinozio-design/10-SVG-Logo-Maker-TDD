const Text = require('../Text.js');

describe('Text', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Text();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<text x="150" y="120" font-size="60" text-anchor="middle" fill="blue" />');
        });
    });
});