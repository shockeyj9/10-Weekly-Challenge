const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./lib/rendering.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter 3 characters for your logo',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Please enter the color you want your text to be',
      name: 'text_color',
    },
    {
      type: 'list',
      message: 'Please select the shape you would like your logo to be',
      name: 'shapes',
      choices: ['Square','Triangle','Circle'],
    },
    {
        type: 'input',
        message: 'Please enter the color you want the shape to be',
        name: 'shape_color',
      },
  ])
  .then((response) => {
    render.init(response)
    .then((data)=> fs.appendFile('logo.svg',data,(err) => {
      if (err) throw err;
    }))
    .then(()=> console.log("Generated logo.svg"))
})
