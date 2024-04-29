import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold('\n\t***   Welcome to Currency Converter   ***\n'));
let exchangeRate = {
    "USD": 1, // Base Currency
    "EUR": 0.93, // Euro
    "GBP": 0.8, // British or Great Britain Pound
    "CHI": 7.25, // China Yaun
    "JPY": 157.77, // Japanese Yun
    "CAD": 1.37, // Candian Dollar
    "AUD": 1.53, // Australian Dollar
    "NZD": 1.68, // New Zealand Dollar
    "ANG": 1.80, // Netherland Currency
    "PAL": 0.71, // Palestine had its currency,  now its currency is the Jordanian Dinar.
    "SAR": 3.75, // Saudi Riyal
    "QAR": 3.64, // Qatari Riyal
    "MAD": 10.10, // Moroccan Dirham
    "AFN": 72.90, // Afghan Afghani
    "EGP": 47.90, // Egyptian Pound
    "KWD": 0.31, // Kuwaiti Dinar
    "BRL": 5.12, // Brazilian Real
    "KRW": 1376.74, // South Korean won
    "LSL": 19.01, // Lesotho Loti
    "IND": 83.42, // Indian Rupee
    "PKR": 278.25, // Pakistani Rupee
};
let user = await inquirer.prompt([
    {
        name: "fromcurrency",
        type: "list",
        message: 'Please select the currency that you want to convert from:',
        choices: ["USD", "EUR", "GBP", "CHI", "JPY", "CAD", "AUD", "NZD", "ANG", "SAR", "QAR", "MAD", "AFN", "EGP",
            "PAL", "KWD", "BRL", "KRW", "LSL", "IND", "PKR"]
    }, {
        name: "tocurrency",
        type: "list",
        message: 'Select the Currency that you want to convert into:',
        choices: ["USD", "EUR", "GBP", "CHI", "JPY", "CAD", "AUD", "NZD", "ANG", "SAR", "QAR", "MAD", "AFN", "EGP",
            "PAL", "KWD", "BRL", "KRW", "LSL", "IND", "PKR"]
    }, {
        name: "amount",
        type: "input",
        message: chalk.yellow("Enter the amount you want to convert:")
    }
]);
// store user's input into variables
let fromAmount = exchangeRate[user.fromcurrency];
let toAmount = exchangeRate[user.tocurrency];
let amount = user.amount;
// Conversion
let baseAmount = amount / fromAmount;
let exchangeAmount = baseAmount * toAmount;
console.log(chalk.green(`Your converted amount is ${exchangeAmount.toFixed(4)} ${user.tocurrency}.`));
console.log(chalk.blueBright(`\n***   Thankyou for using!   ***\n`));
