const Shapes = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');


describe('Shapes',()=>{
    it('should have shape color of blue',()=>{
        const fillColor = 'blue';
        const triangle = new Shapes(fillColor,'SVG');

        expect(triangle.textEl.fill).toBe(fillColor);
    })
})
describe('Shapes',()=>{
    it('should have text that is entered',()=>{
        const text = 'SVG';
        const triangle = new Shapes('blue', text);

        expect(triangle.textEl.content).toBe(text);
    })
})