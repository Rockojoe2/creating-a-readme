const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) 
{
  const license = response.license;
  let licenseBadge = "";

  //Created the license badges from https://shields.io/badges. Got the license links to licenses from searching at https://opensource.org/licenses/.

  if (license == "MIT License")
  {
    licenseBadge = "[![MIT License](https://img.shields.io/badge/MIT_LICENSE-blue)](https://opensource.org/licenses/MIT)";
    //https://img.shields.io/badge/MIT_LICENSE-blue
    //[![ALT_TEXT](IMAGE_URL)](LINK_URL)
  }
  else if (license == "Apache License 2.0")
  {
    licenseBadge = "[![Apache License 2.0](https://img.shields.io/badge/APACHE_LICENSE_2.0-blue)](https://opensource.org/license/apache-2-0/)";
    //https://img.shields.io/badge/APACHE_LICENSE_2.0-blue
  }
  else if (license == "GNU General Public License V3.0")
  {
    licenseBadge = "[![GNU General Public License V3.0](https://img.shields.io/badge/GNU_LICENSE_3.0-blue)](https://opensource.org/license/gpl-3-0/)";
    //https://img.shields.io/badge/GNU_LICENSE_3.0-blue
  }
  else if (license == "Eclipse Public License 1.0")
  {
    licenseBadge = "[![GNU General Public License V3.0](https://img.shields.io/badge/ECLIPSE_PUBLIC_LICENSE_1.0-blue)](https://opensource.org/license/epl-1-0/)";
    //https://img.shields.io/badge/ECLIPSE_PUBLIC_LICENSE_1.0-blue
  }
  else
  {
    licenseBadge = "Not Available";
  }

  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

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
  
  //Below is what will be returned. We set the format like to be like this, and then return the user inputs based on the variables we defined above.

  return `# ${title}

  ${renderLicenseBadge(response)}

  ## Description
  ${description}

  ## Table of Contents

  -[Installation](#installation)

  -[Usage](#usage)

  -[License](#license)

  -[Contributions](#contributions)

  -[Tests](#tests)

  -[Questions](#questions)

  ## Installation
  ${installInstructions}

  ## Usage
  ${usageInformation}

  ## License
  ${license}

  ## Contributions
  ${contributions}

  ## Tests
  ${tests}

  ## Questions
  Feel free to reach out to me at my Github at https://github.com/${githubProfile}.

  You can also reach me through my e-mail at ${eMailAddress}!

  `;

}

module.exports = generateMarkdown;
