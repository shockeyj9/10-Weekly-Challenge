const Shape = require("./shape.js");

class Circle extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shapeEl.type = 'circle';
        this.shapeEl.position = 'cx="150" cy="100" r="80"';
        this.textEl.position = 'x="150" y="120"';
    }
}

module.exports = Circle;