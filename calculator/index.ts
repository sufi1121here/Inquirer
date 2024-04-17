import inquirer from 'inquirer'
import chalk from 'chalk'

let runAgain=1;
for(let i=0;  i<runAgain; i++){
    let calculator= await inquirer.prompt([
        {
            type: "number",
            name: "firstNum",
            message: "Enter First Number: "
        },
        {
            type: "number",
            name: "secondNum",
            message: "Enter Second Number: "
        },
        {
            type:"list",
            name: "operator",
            message: "Select an operator: ",
            choices: (["+","-","*","/"])
        }
    ])

    if(calculator.operator==='+'){
        console.log(calculator.firstNum + calculator.secondNum);
    
    }else if(calculator.operator==='-'){
        console.log(calculator.firstNum - calculator.secondNum);
    
    }else if(calculator.operator==='*'){
        console.log(calculator.firstNum * calculator.secondNum);
    
    }else if(calculator.operator==='/'){
        console.log(calculator.firstNum / calculator.secondNum);
    }
    // else{         // // // // This "else" won't be use.
    //     console.log("Error! Please enter a valid operator.")
    // }    

    let answer= await inquirer.prompt({
        type:'input',
        name: 'runAgain',
        message: chalk.green("Do you want to run the program again (yes or no)?")
    })

    if(answer.runAgain === 'yes'){
        runAgain +=1
    }
}

