// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("lic:", license);
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
   return `[Guide to Licenses](https://choosealicense.com/)`;
 }
  else {
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    
    This project is covered under the ${data.licenseName} license.
    `;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// File details
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ## ${data.description}

  ## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Testing](#testing)
- [Questions](#questions)

## License
${renderLicenseSection(data.licenseName)}

## Installation
${data.installation}
## Usage
${data.usage}
    
## Credits
${data.contribution}

## Testing
${data.testing}

## Questions
My GitHub username is ${data.username}, and my GitHub profile link is ${data.profile}.
`;


}

module.exports = generateMarkdown;
