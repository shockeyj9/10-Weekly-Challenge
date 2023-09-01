const Shape = require("./shape.js");

class Triangle extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shapeEl.type = 'polygon';
        this.shapeEl.position = 'points="141,5 9,190 291,190"';
        this.textEl.position = 'x="145" y="145"';
    }
}

module.exports = Triangle;