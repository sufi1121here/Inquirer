import inquirer from 'inquirer';
import chalk from 'chalk';

let myBalance = 10000;
let myPin = 1234;
let pinAns = await inquirer.prompt(
    {
        name: 'pin',
        type: 'number',
        message: 'Enter your Pin'
    }
)

if(myPin === pinAns.pin){
    console.log(chalk.greenBright("Your Pin is correct!"));
    let payMethod = await inquirer.prompt(
        {
            name: 'options',
            type: 'list',
            message: 'Select your Payment Method:',
            choices: ['withdraw', 'fastcash', 'check balance', 'deposit']
        })

        if(payMethod.options === 'withdraw'){
            let payment = await inquirer.prompt({
                name: 'amount',
                type: 'number',
                message: 'How much would you like to Withdraw?'
            })
            if(payment.amount < myBalance){
                myBalance -= payment.amount;
                console.log(chalk.blue('Your remaining balance is: '+myBalance));
            }else{
                console.log(chalk.red(`Insufficient Balance!`));
            }

        }else if(payMethod.options === 'fastcash'){
            let fastCash = await inquirer.prompt({
                name: 'directcash',
                type: 'list',
                message: 'Please select given options',
                choices: ['1000', '2000', '3000', '5000']
            })
            myBalance -= fastCash.directcash;
            console.log(chalk.blue('Your remaining balance is: '+myBalance));

        }else if(payMethod.options === 'check balance'){
            console.log(chalk.blueBright('Your remaining balance is: '+myBalance));
            
        }else if(payMethod.options === 'deposit'){
            let myDeposit = await inquirer.prompt({
                name: 'depositamount',
                type: 'number',
                message: 'How much do you want to deposit?'
            })
            myBalance += myDeposit.depositamount;
            console.log(chalk.green('Your new balance is: '+myBalance));
        }
}else{
    console.log(chalk.redBright("Invalid PIN"));
}