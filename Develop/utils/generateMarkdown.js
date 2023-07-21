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
  const title = response.title;
  const description = response.description;
  const installInstructions = response.installation;
  const license = response.license;

  return `# ${title}
  
  ## Description
  ${description}

  ##Installation Instructions
  ${installInstructions}

  ##License
  ${license}

  `;

}

module.exports = generateMarkdown;
