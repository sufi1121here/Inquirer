import inquirer from 'inquirer';
import chalk from 'chalk'

let todoList:string[] = [];
let conditions = true;
console.log(chalk.blue.bold('\n\t***    Welcome to Todo List App    ***\n'));

let method = async() => {
    while (conditions) {
        let answer = await inquirer.prompt({
            name: 'choice',
            type: 'list',
            message: chalk.yellowBright('What do you want to do?'),
            choices: ['Add Task', 'Update Task', 'View Todo List', 'Delete Task', chalk.red('Exit')]
        })
        // Calling functions
        if(answer.choice === 'Add Task'){
            await addTask()
        }else if(answer.choice === 'Update Task'){
            await updateTask()
        }else if(answer.choice === 'View Todo List'){
            await viewTask()
        }else if(answer.choice === 'Delete Task'){
            await deleteTask()
        }else if(answer.choice === chalk.red('Exit')){
            console.log(chalk.magenta.bold('\n"  Thanks for using Todo List App!  "\n'));
            conditions = false;
        }
    }
}

// function to add new task
let addTask = async() => {
    let newTask = await inquirer.prompt({
        name: 'task',
        type: 'input',
        message: chalk.blue('Enter your new task:')
    })
    todoList.push(newTask.task)
    console.log(`${chalk.green(newTask.task)} task added successfully in Todo-List.\n`);
}

// For update a task
let updateTask = async() => { await viewTask()
    let updateTaskInd = await inquirer.prompt([{
        name: 'index',
        type: 'number',
        message: 'Enter the Index number you want to "Update":'
    },{
        name: 'newtask',
        type: 'input',
        message: 'Now, enter your new task:'
    }])
    todoList[updateTaskInd.index-1] = updateTaskInd.newtask
    console.log(`Index number ${chalk.greenBright(updateTaskInd.index)} has been updated successfully.\n`);
}

// View Todo List
let viewTask = () => {
    console.log(chalk.blue.bold(`\nYour Todo List:\n`));
    todoList.forEach((task, index) => {
        console.log(`${index+1}: ${task}\n`); 
    })
}

// function to delete 
let deleteTask = async() => { await viewTask()
    let taskInd = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Enter the Index number of the task you want to delete:'
    })
    let deleteTask = todoList.splice(taskInd.index -1, 1);
    console.log(`${chalk.redBright.bold(deleteTask)} this task is deleted.\n`);
}
method();