// Packages needed for the project
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input', 
    message: "Describe your project.",
    name: 'description'
  },
  {
    type: 'list',
    message: 'What is your license?',
    choices: ['MIT', 'Apache 2.0', 'GNU', 'None'],
    name: 'licenseName'
  },
  {
    type: 'input',
    message: 'What do users need to do to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What needs to be done to use the project?',
    name: 'usage'
  },
  {
    type: 'input', 
    message: 'Who contributed to this project?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'What do users need to do to test your project?',
    name: 'testing'
  }, 
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter a link to your GitHub profile.',
    name: 'profile'
  }
];

// Writes README file
function writeToFile(data) {
  fs.writeFile('path.md', generateMarkdown(data), function(err, result) {
    if (err) console.log('error', err);
  });
}

// Initializes application
function init() {
  inquirer
    .prompt(questions)
    .then(function(answers) {
      console.log(answers);
      writeToFile(answers);
    });
}

// Function call to initialize app
init();
