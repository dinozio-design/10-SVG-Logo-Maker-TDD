const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
// NOTE TO SELF: put a const svg something here and require the svg stuff you need

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Entre up to three characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Entre up to three characters'
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Successfully Created ${fileName}`);
    });
}

function init() {
    inquirer
        .createPromptModule(questions)
        .then((answeres) => {
            // const data = /* NOTE TO SELF: call the const that you used for SVG stuff and pass in the user input parametes*/
            writeToFile()
        })
}

init();