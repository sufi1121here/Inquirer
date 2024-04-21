import inquirer from 'inquirer'
import chalk from 'chalk'

console.log(chalk.yellowBright("\n\t***   Welcome to CLI Number Guessing Game   ***\n"));

const randomNum = Math.floor(Math.random() * 6 + 1 );

const attempt = await inquirer.prompt([{
    name: "GuessedNum",
    type: "number",
    message: chalk.magenta("Enter your guess number from 1 to 6:")
}]);

if(attempt.GuessedNum === randomNum){
    console.log(chalk.green("Congratulations! You guess a right number."))
}else{
    console.log(chalk.red("OOPS!")+ " You are wrong. The correct answer is " + randomNum + ".\n")
}