class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeEl = {
            fill: `fill="${shapeColor}"`
        }
        this.textEl = {
            font_size: 'font-size="60"',
            text_anchor: 'text-anchor="middle"',
            content: text,
            fill: `fill="${textColor}"`
        }
    }
    renderShape(){
        return `<${this.shapeEl.type} ${this.shapeEl.position} ${this.shapeEl.fill}/> \n <text ${this.textEl.position} ${this.textEl.font_size} ${this.textEl.text_anchor} ${this.textEl.fill}>${this.textEl.content}</text>`
    }
}


module.exports = Shape;