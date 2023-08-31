const Shapes = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');

//------Shapes class testing-----//
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

//--------Triangle shape class testing-------//
describe('Triangle',()=>{
    it('should have text color of blue',()=>{
        const fillColor = 'blue';
        const triangle = new Triangle(fillColor,'SVG');

        expect(triangle.textEl.fill).toBe(fillColor);
    })
})