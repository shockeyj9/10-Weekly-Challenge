class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeEl = {
            fill: `fill=${shapeColor}`
        }
        this.textEl = {
            font_size: 'font-size="60"',
            text_anchor: 'text-anchor="middle"',
            content: text,
            fill: `fill=${textColor}`
        }
    }
    renderShape(){
        return `<${this.shapeEl.type} ${this.shapeEl.position} ${this.shapeEl.fill}/> \n <text ${this.textEl.position} ${this.textEl.font_size} ${this.textEl.text_anchor} ${this.textEl.fill}>${this.textEl.content}</text>`
    }
}

/*square: 
    <rect x="75" y="25"  width="150" height="150" fill="red"/>
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">svg</text>
*/

/*circle: 
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x='150' y='120' font-size='60' text-anchor='middle' fill='white'>SVG</text>
*/

/*triangle: 
    <polygon points="141,5 9,190 291,190" fill="green" />
    <text x='145' y='145' font-size='60' text-anchor='middle' fill='white'>SVG</text>
*/

module.exports = Shape;