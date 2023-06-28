const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
// NOTE TO SELF: put a const svg something here and require the svg stuff you need

const questions = [{
    type: 'input',
    name: 'text',
    message: 'Entre up to three characters',
},
{
    type: 'input',
    name: 'textCol',
    message: 'Enter a keyword',
},
{
    type: 'list',
    name: 'shape',
    message: 'Chose a shape:',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword (OR a hexadecimal number)',
}];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Successfully Generated logo.svg`);
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answeres) => {
            const data = JSON.stringify(answeres);
            /* NOTE TO SELF: call the const that you used for SVG stuff and pass in the user input parametes*/
            writeToFile('logo.svg', data);
        })
}

init();