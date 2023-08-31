const Shape = require("./shape.js");

class Square extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shapeEl.type = 'rect';
        this.shapeEl.position = 'x="75" y="25"  width="150" height="150"';
        this.textEl.position = 'x="150" y="115"';
    }
}

module.exports = Square;