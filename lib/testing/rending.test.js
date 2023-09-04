const render = require('../rendering.js');

describe('Callback Testing', ()=>{
    it ('Should return logo string', async ()=>{
        const testData = 
            {
            text: 'svg',
            text_color: 'white',
            shapes: 'Square',
            shape_color: 'blue'
            };
        const result = '<rect x=\"75\" y=\"25\"  width=\"150\" height=\"150\" fill=\"blue\"/> \n <text x=\"150\" y=\"115\" font-size=\"60\" text-anchor=\"middle\" fill=\"white\">svg</text>'
        const basic = await render.basicEl(testData);
        expect(basic).toBe(result);
    })
})
