/* We want to create a READ ME generator

We need to have a command-line application that accepts user input.
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

First we need to figure out how to get user input using node.js in the command prompt.
Then we need to figure out how to keep the questions going.
Need to figure out how to make a README file from our answers that we get.

*/

// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require("fs"); //Needed to perform file operations such as making a readme
const generateMarkdown = require("./Develop/utils/generateMarkdown.js"); //Need to call over my generateMarkdown js file to use the generateMarkdown function.

// TODO: Create an array of questions for user input
//Below are the questions we will ask our users. When the user answers the question, it will be stored under the variable that is next to the name. For example, for the first question "What is the title of your README", the variable will be stored under title. We define this in a function response at the very end, so to get the title, we would call the function and then the title. EX: response.title, response.description, etc.

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description?',
      name: 'description',
    },
    
    {
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installation',
    },

    {
        type: 'input',
        message: 'Enter usage:',
        name: 'usage',
    },
    {
          type: 'list',
          message: 'Pick a license:',
          name: 'license',
          choices: ["MIT License", "Apache License 2.0", "GNU General Public License V3.0", "Eclipse Public License 1.0"],
    },

    {
        type: 'input',
        message: 'Enter contributions:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter tests:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your github username? ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your e-mail address? ',
        name: 'eMail',
    },
  ])
  .then(function(response){

    const markdown = generateMarkdown(response); //The function that is defined in generateMarkdown.js

    //Originally tried using stringify, but it made the README print out not print out new lines.
    fs.writeFile('README.md', markdown, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );

  }
  );

//   module.exports = {
//     response,
//   };

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

