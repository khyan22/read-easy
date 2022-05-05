
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
Read Easy is a README generator that gives the user prompts and takes the input the user gives to form a comprehensive README. (This README was made using Read Easy)

## Usage
The project is very simple to use you only need to input "node index" into the command line and answer the prompt that are given. Before you use Read Easy make sure to delete the dist folder, it will be created dynamically. That being said make sure you have node.js and inquirer installed (instructions in the installation section).

## Code Breakdown
The code is very simple, I used a questions() function to call in the inquirer prompt and made an array consisting of objects that hold the questions. The user input is then sent to the generateMarkdown() function, using .then(), that returns the readme template with the users input. After it runs another .then() sends the template to the writeFile() function and it uses the template to populate the .md file it creates in the dist folder

## Installation
To install the application press the green "code" button and click on "Download ZIP", while in the command line and in projects root directory, type "npm i inquirer". Here's a video on how to use: https://drive.google.com/file/d/1EoKPDMiegv4vfWidYF_rKiSFYKNmh38T/view 


If you don't have Node you can read this article: https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs 

## Contributions
Khyan Alvarez

## Test
This project doesn't have any test commands.

## License
This project uses the "Apache_License_2.0" license. (This is an example, this project does not have a license)

## Questions
If you have any questions you can reach me at khyanalvarez@gmail.com. 
You can see my other projects at https://github.com/khyan22.
