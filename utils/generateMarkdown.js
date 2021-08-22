// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![$(license)](https://img.shields.io/badge/license-$%7Blicense%7D-blue.svg)`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
   return [Guide to Licenses](https://choosealicense.com/);
 }
  else {
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `renderLicenseBadge()
    renderLicenseLink()
    `;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// File details
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}

  ## License
  renderLicenseSection();

  ## Badges
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
## Usage
    ```md
    ![alt text](assets/images/screenshot.png)
    ```
## Credits
## License
## Badges
## Features
## How to Contribute
## Tests
`;
}

module.exports = generateMarkdown;
