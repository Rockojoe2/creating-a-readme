const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  //Below  are the variables that I pulled over from index.js in my inquirer .prompt

  const title = response.title;
  const description = response.description;
  const installInstructions = response.installation;
  const usageInformation = response.usage;
  const license = response.license;
  const contributions = response.contribution;
  const tests = response.test;
  const githubProfile = response.github;
  const eMailAddress = response.eMail;
  


  return `# ${title}
  
  ## Description
  ${description}

  ## Table of Contents

  -Installation Instructions
  -Usage
  -License
  -Contributing
  -Tests
  -Questions

  ## Installation Instructions
  ${installInstructions}

  ## Usage
  ${usageInformation}

  ## License
  ${license}

  ## Contributions
  ${contributions}

  ## Contributions
  ${tests}

  ## Questions
  Feel free to reach out to me at my Github at https://github.com/${githubProfile}

  `;

}

module.exports = generateMarkdown;
