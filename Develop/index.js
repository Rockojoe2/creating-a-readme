// TODO: Include packages needed for this application

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

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

function answerQuestions() {

    for(i = 0; i < questions.length; i++)
    {
        rl.question(questions[i].question, function(answer){
            console.log("This is your answer" + answer);
            answers.push(answer)
            console.log(answers);
            rl.close();
        });
    
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("This is how many questions we have: " + questions.length);
console.log("This is the question to question 1: " + questions[0].question);
answerQuestions();

