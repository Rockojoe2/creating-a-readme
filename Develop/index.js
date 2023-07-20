// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        question: "This is question 1"
    },

    {
        question: "This is question 2"
    },
];

const answers = [];

for(i = 0; i < questions.length; i++)
{
    let input = prompt(questions[i].question);
    answers.push(input);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
console.log("This is how many questions we have: " + questions.length);
