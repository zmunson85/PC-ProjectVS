var readlineSync = require('readline-sync');


let number1 = readlineSync.question('Pick A Number: ');
let number2 = readlineSync.question('Now Pick A Different Number: ');

/* math operators */
const operators = ['add', 'sub', 'multi', 'div'];
let execute = readlineSync.keyInSelect(operators, " Select a math operation like: add, subtract, multiply or divide:  ");
let selected = operators[execute]

/* math function */
//using a string literal (back-ticks) to grab each argument and math operator 
function doMath(firstNum, secondNum) {
    if (selected === 'add') {
        console.log(`Output: ${firstNum + secondNum}`);
    } else if (selected === 'sub') {
        console.log(`Output: ${firstNum - secondNum}`);
    } else if (selected === 'multi') {
        console.log(`Output: ${firstNum * secondNum}`);
    } else if (selected === 'div') {
        console.log(`Output: ${firstNum / secondNum}`);
    }
}
doMath(Number(number1), Number(number2))

