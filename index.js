#!/usr/bin/env/ node
import inquirer from "inquirer";
//costant variable 
//ask to guess a number
//print answer
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guessed number",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("correct guessed!!");
}
else {
    console.log("wrong guess");
}
