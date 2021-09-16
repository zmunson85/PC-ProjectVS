var readlineSync = require('readline-sync');


let name = readlineSync.question('Enter Your First Name: ');
console.log('Hello ' + name + ' Lets do math in the terminal');
let number1 = readlineSync.question('Pick A Number: ');
let number2 = readlineSync.question('Now Pick A Different Number: ');

/* math operators */
const operators = ['add', 'sub', 'multi', 'div'];
let execute = readlineSync.keyInSelect(operators, " Select a math operation like: add, subtract, multiply or divide:  ");
let selected = operators[execute]

/* math function */
//using a template literal (back-ticks) to grab each argument and math operator 
function doMath(firstNum, secondNum) {
    if (selected === 'add') {
        return `Output: ${firstNum + secondNum}`;
    } else if (selected === 'sub') {
        return `Output: ${firstNum - secondNum}`;
    } else if (selected === 'multi') {
        return `Output: ${firstNum * secondNum}`;
    } else if (selected === 'div') {
        return `Output: ${firstNum / secondNum}`;
    }
}
console.log(doMath(Number(number1), Number(number2)));
