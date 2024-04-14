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
console.log(chalk.blueBright.bold('"' + input.firstname + " " + input.lastname + `" is ` + input.age + ` years old, ` + `has been selected course(s): ` + input.Courses + `, will take ` + input.Class + "."));
#;
#;
#;
Inquirer;
Programs;
For;
inquirer, you;
should;
install;
the;
npm;
package;
which;
is;
"npm i inquirer" in the;
cmd;
window;
or;
node.js.
;
And;
then;
again;
type;
"npm i --save-dev @types/inquirer";
on;
the;
cmd;
window;
or;
terminal.
;
Then;
create;
a;
tsc;
file;
and;
initialize;
it;
by;
typing;
"tsc --init".It;
will;
create;
a;
tsconfig.json;
file.
    Add;
"type";
"module" in the;
package.json;
file;
which;
will;
created;
by;
"npm init -y".
;
Edit;
target;
into;
"ES2022";
which;
is;
on;
line;
number;
14, line;
number;
28;
module, and;
line;
number;
30;
moduleResolution;
edit;
by;
"NodeNext".
;
