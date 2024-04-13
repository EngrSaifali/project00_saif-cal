#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

/* Sa_v.1 Calculator */

async function Sa_v1() {

    const response = await inquirer.prompt([

        {
            name : "value1",
            type : "input",
            message : "Enter a number : "
        },

        {
            name : "operator",
            type : "input",
            message : "Select an operator : ( +, -, *, /, **, % )"
        },

        {
            name : "value2",
            type : "input",
            message : "Enter a number : "
        }
    ]);

    const value1 = parseFloat(response.value1);
    const value2 = parseFloat(response.value2); 
    const operator = response.operator;

    if(isNaN(value1) || isNaN(value2)) {
        console.log(chalk.redBright("Enter a valid number."));
        return;
    };

    let result : number;

    switch(operator) {
        case "+" :
            result = value1 + value2;
            break;
        case "-" :
            result = value1 - value2;
            break;
        case "*" :
            result = value1 * value2;
            break;
        case "/" :
            if(value2 === 0) {
                console.log(chalk.redBright("Error: Divisible by 0 is not possible."));
                return;
            };
            result = value1 / value2;
            break;
        case "**" :
            result = Math.pow(value1 , value2);
            break;
        case "%" :
            result = value1 % value2;
            break;
        default:
            console.log(chalk.redBright("Enter a valid operator."));
            return;
    };

    console.log(chalk.yellowBright(`${value1} ${operator} ${value2} = ${result}`));

}

Sa_v1();

/* Simple Calculator */

// const response = await inquirer.prompt([
//     {
//         name : "return1",
//         type : "number",
//         message : "Enter the first value"
//     },

//     {
//         name : "return2",
//         type : "number",
//         message : "Enter the second value" 
//     },

//     {
//         name : "operator",
//         type : "list",
//         message : "Enter an operator to perform an operation :",
//         choices : ["Addition", "Subtraction", "Multiplication", "Division"]
//     }
// ]);

// if(response.choices === "Addition") {
//     console.log(response.return1 + response.return2);
// } else if (response.operator === "Subtraction") {
//     console.log(response.return1 - response.return2);
// } else if (response.operator === "Multiplication") {
//     console.log(response.return1 * response.return2);
// } else if (response.operator === "Division") {
//     console.log(response.return1 / response.return2);
// } else {
//     console.log("Enter a valid operator");
// };