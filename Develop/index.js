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

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

// TODO: Create an array of questions for user input
const questions = [
    {
        question: "What is your name? "
    },

    {
        question: "What year were you born in? "
    },

    {
        question: "Where did you attend college? "
    }
];

const answers = [];

function answerQuestions(count) {

    // var count = 0;

    if(count === questions.length)
        {
            rl.close();
            return;
        }

        rl.question(questions[count].question, function(answer)
        {
            // console.log("This is your answer " + answer);
            answers.push(answer);
            console.log(answers);
            answerQuestions(count + 1); //Made the function recursive so it keeps calling itself. The code kept breaking/getting stuck in an infinite loop when I tried using count++ or a for/while loop.
        })

    // while (count < questions.length)
    // {
    //     if(count === questions.length)
    //     {
    //         rl.close();
    //     }
    //     else
    //     {
    //         rl.question(questions[count].question, function(answer){
    //             console.log("This is your answer ${answer}" + answer);
    //             answers.push(answer)
    //             console.log(answers);
    //             count++
    //         });
    //     }
    // }

    // for(i = 0; i < questions.length; i++)
    // {
    //     rl.question(questions[i].question, function(answer){
    //         console.log("This is your answer " + answer);
    //         answers.push(answer)
    //         console.log(answers);
    //         rl.close();
    //     });
    
    // }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("This is how many questions we have: " + questions.length);
console.log("This is the question to question 1: " + questions[0].question);
answerQuestions(0);

