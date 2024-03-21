#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select One of the Operators to perform Operation",
    type: "list",
    name: "operator",
    choices: ["addition", "Substraction", "Multiply", "Divide", "Modulus"],
  },
]);
console.log(answer);
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.SecondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.firstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiply") {
  console.log(answer.firstNumber * answer.SecondNumber);
} else if (answer.operator === "Divide") {
  console.log(answer.firstNumber / answer.SecondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.SecondNumber);
} else {
  console.log("Sorry Choose a valid operator");
}
