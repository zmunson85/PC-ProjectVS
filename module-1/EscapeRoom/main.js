const readline = require('readline-sync');

let name = readline.question('Please Enter Your First-Name: ');
console.log('Hello ' + name + ' We are going to play a little game!');
console.log("You are now trapped in a room, there is a hole in the wall that you can reach your hand into but be cautious, reaching into this hole may have fatal consequences. There is a door to escape but it is locked, you must find a key to unlock it and exit the room safely! ");
let gameOver = false;
let findKey = false;
let isAlive = true;
while (isAlive === true) {
    const yourChoices = ['Reach your hand into the hole', 'Look for the Key to unlock the door', 'Use the Key to open the door'];
    console.log('you need to make a choice');

    process.exit();
}