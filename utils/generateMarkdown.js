// Returns license badge or empty string if no license
function renderLicenseBadge(license) {
  if (license) {
    return `![$(license)](https://img.shields.io/badge/license-$%7Blicense%7D-blue.svg)`;
  }
  else {
    return "";
  }
}

// Returns license link or empty string
function renderLicenseLink(license) {
  if (license) {
   return `[Guide to Licenses](https://choosealicense.com/)`;
 }
  else {
    return "";
  }

}

// Returns license section of README or empty string
function renderLicenseSection(license) {
  if (license) {
  return `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
    
  This project is covered under the ${license} license.
    `;
  }
  else {
    return "";
  }
}

// Generates markdown for README
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
