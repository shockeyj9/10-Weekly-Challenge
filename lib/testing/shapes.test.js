const Shapes = require('../shapes/shape');
const Circle = require('../shapes/circle.js');
const Square = require('../shapes/square.js');
const Triangle = require('../shapes/triangle.js');

//------Shapes class testing-----//
describe('Shapes',()=>{
    it('should have shape color of red',()=>{
        const shapeColor ='"red"';
        const newShapes = new Shapes(shapeColor, 'svg', '"white"');
        expect(newShapes.shapeEl.fill).toBe(`fill=${shapeColor}`);
    })
})

//------Square class testing-----//
describe('Square',()=>{
    it('should have shape color of red',()=>{
        const shapeColor ='"blue"';
        const newShapes = new Square(shapeColor, 'gvs', '"blue"');
        const result = `<rect x="75" y="25"  width="150" height="150" fill="blue"/> \n <text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">gvs</text>`
        expect(newShapes.renderShape()).toBe(result);
    })
})

//------Triangle class testing-----//
describe('Triangle',()=>{
    it('should have shape color of blue',()=>{
        const shapeColor ='"blue"';
        const newShapes = new Triangle(shapeColor, 'gvs', '"white"');
        const result = '<polygon points="141,5 9,190 291,190" fill="blue"/> \n <text x="145" y="145" font-size="60" text-anchor="middle" fill="white">gvs</text>';
        expect(newShapes.renderShape()).toBe(result);
    })
})

// ------Circle class testing-----//
describe('Circle',()=>{
    it('should have shape color of blue',()=>{
        const shapeColor ='"blue"';
        const newShapes = new Circle(shapeColor, 'gvs', '"white"').renderShape();
        const result = '<circle cx="150" cy="100" r="80" fill="blue"/> \n <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">gvs</text>'
        expect(newShapes).toBe(result);
    })
})
