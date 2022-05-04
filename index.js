// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('You must enter the name of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('You must describe your Project!')
                    return false
                }
            }
        }, 
        {
            type: 'checklist',
            name: 'languages',
            message: 'Please select what languages and technologies were used for this project.',
            choices: [
                'JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node', 'Ruby', 'Python', 'C++',
                'Java', 'SQL', 'NoSQL', 'C#'
            ]
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project?',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('You must provide an explanation on how to use your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain how to install the application',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('You must provide an explanation on how to install your application.')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select which license you're using.",
            choices: [
                "Apache_License_2.0",
                "GNUGeneral Public_License_v3.0",
                "MIT_License",
                "Mozilla_Public_License_2.0",
                "Eclipse_Public_License_2.0",
                "Boost_Software_License_1.0",
                "Creative_Commons_Zero_v1.0_Universal"
            ]
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Add any contributors that have worked on the project.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true
                } else {
                    console.log('You must enter contributions to the project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test command.',
            default: 'npm run test'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.',
            validate: githubInput => {
                if (githubInput) {
                    return true 
                } else {
                    console.log('You must enter your GitHub username!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email.',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('You must enter your Email!')
                    return false
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
const writeToFile = data => {
   
}


questions()
    .then(promptAnswers => {
        return generateMarkdown(promptAnswers)
    })