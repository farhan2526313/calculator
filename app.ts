import inquirer from  'inquirer';
import chalk from 'chalk';
import figlet from "figlet";
import {addition,subtraction,multiplication,division} from "./opreation.js"



const welcome = async () => {

    console.log(figlet.textSync("calculater"));

    let choice = {
        choice : "yes"
    };

    while (choice.choice == "yes"){

        let input = await inquirer.prompt([{

            name : "num1" ,
            type : "number",
            message : "enter your first number"

        },
        {
            name : "num2" ,
            type : "number",
            message : "enter your second number"
        },
        {
            name : "option",
            type : "list",
            message : "Select your operations",
            choices : ["addition","subtraction","multiplication","division"]
        }
    ]);

            if (input.option == "addition") {
                console.log(chalk.blue.bold("Sum of " + input.num1 + " and " + input.num2 + " is: " + addition (input.num1, input.num2)));
            } else if (input.option == "subtraction"){
                console.log(chalk.gray.bold("subtraction of " + input.num1 + " and " + input.num2 +" is: "+ subtraction(input.num1 , input.num2)));
            }else if (input.option == "multiplication"){
                console.log(chalk.green.bold("multiplication of " + input.num1 + " and " + input.num2 +" is: "+ multiplication(input.num1 , input.num2)));
            }else if (input.option == "division"){
                console.log(chalk.yellow.bold("division of " + input.num1 + " and " + input.num2 + " is: " + division(input.num1 , input.num2)));
            }else {
                console.log(chalk.red.bold("Inviled option"));
            }

            choice = await inquirer.prompt([{
                name : "choice",
                type : "list",
                message : "Do you want to perfome an other operation",
                choices: ["yes", "No"]
            }
            
            ]);
    }    
};

await welcome();







