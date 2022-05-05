
# Read Easy

## Languages
JavaScript, Node

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
Read Easy is a README generator that gives the user prompts and takes the input the user gives to form a comprehensive READM

## Usage
The project is very simple to use you only need to input "node index" into the command line and answer the prompt that are given. That being said make sure you have node.js installed and are in theapplications root folder

## Code Breakdown
The code is very simple, I used a questions() function to call in the inquirer prompt and made an aray consisting of objects that hold the questions. The user input is then sent to the generateMarkdown() function, using .then(), that returns the readme template with the users input. After it runs another .then() sends the template to the writeFile() function and it uses the template to populate the .md file it creates in the dist folder

## Installation
undefined

## Contributions
Khyan Alvarez

## Test
none

## License
This project uses the "Apache_License_2.0" license.

## Questions
If you have any questions you can reach me at khyanalvarez@gmail.com. 
You can see my other projects at https://github.com/khyan22
