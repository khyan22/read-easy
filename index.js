//all packages and exports
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// prompts the user with questions that are used to make the README
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
            type: 'checkbox',
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
            name: 'breakdown',
            message: 'Please describe how your code works.',
            validate: breakdownInput => {
                if (breakdownInput) {
                    return true
                } else {
                    console.log('You must describe your code!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain how to install the application.',
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

//this function writes the md file in the dist folder and it uses the data from generateMarkdown() to populate the file and if
const writeFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('Your README is complete! Go to the "dist" folder to check it out.')
            console.log('Remember you can always edit the README!')
        }
    })
   
}


questions()
    //uses prompt input from user to generate the markdown, the data is sent through the "promptAnswer" parameters 
    .then(promptAnswers => {
        //returns the markdown
        return generateMarkdown(promptAnswers)
    })
    //uses the markdown generated to write the the file
    .then(readMeContent => {
        return writeFile(readMeContent)
    })
    .catch(err => {
        console.log(err)
    })