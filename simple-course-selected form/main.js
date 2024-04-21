import inquirer from 'inquirer';
import chalk from 'chalk';
let input = await inquirer.prompt([
    {
        type: "input",
        name: "firstname",
        message: chalk.yellow("What is your First Name ?")
    }, {
        type: "input",
        name: "lastname",
        message: chalk.yellow("What is your Last Name ?")
    }, {
        type: "list",
        name: "Gender",
        message: chalk.yellow("What is your Gender ?"),
        choices: ['Male', 'Female']
    }, {
        type: "input",
        name: "age",
        message: chalk.yellow("How old are you:"),
        // choices: ['18-22', '23-27', '28-32', '33-37']
    }, {
        type: 'checkbox',
        name: "Courses",
        message: chalk.yellow("What is your Course(s)?"),
        choices: ['Web Development', 'Data Science', 'Artificial Intelligence', 'Deep learning']
    }, {
        type: "list",
        name: "Class",
        message: chalk.yellow("Class Type:"),
        choices: ['Online Classes', 'Physical Classes']
    }
]);
console.log(chalk.blueBright.bold('\n"' + input.firstname + " " + input.lastname + `" is ` + input.age + ` years old, ` + `has been selected course(s): ` + input.Courses + `, will take ` + input.Class + "."));
