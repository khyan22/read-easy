function generateMarkdown(data) {
  return `
  # ${data.title}

  ![license](http://img.shields.io/badge/license-${data.license}-blueviolet.svg?style=for-the-badge&logo=appveyor)

  ## Languages
  ${data.languages.join(', ')}

  ## Table of Content
  - [Description](#description)
  - [Usage](#usage)
  - [Code Breakdown](#code-breakdown)
  - [Installation](#installation)
  - [Contributions](#contributions)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Code Breakdown
  ${data.breakdown}

  ## Installation
  ${data.installation}

  ## Contributions
  ${data.contributions}

  ## Test
  ${data.test}

  ## License
  This project uses the "${data.license}" license.

  ## Questions
  If you have any questions you can reach me at ${data.email}. 
  You can see my other projects at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;