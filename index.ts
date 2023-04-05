import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from "figlet";


let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);