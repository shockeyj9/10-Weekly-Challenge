const Triangle = require('./shapes/triangle.js');
const Square = require('./shapes/square.js');
const Circle = require('./shapes/circle.js');


async function init (results) {
    const logo = await basicEl(results);
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n
${logo}\n
</svg>`

};

async function basicEl (results) {
    let logoShape = '';
    if (results.shapes==='Square'){
        logoShape = new Square(results.shape_color,results.text,results.text_color);
    }else if(results.shapes==='Triangle'){
        logoShape = new Triangle(results.shape_color,results.text,results.text_color);
    }else{
        logoShape = new Circle(results.shape_color,results.text,results.text_color);
    } 
    const result = await logoShape.renderShape();
    return result;
}


module.exports = {init,basicEl};