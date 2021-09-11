const readline = require('readline-sync');

/* constants */
let findKey = false;
let dead = false;

const name = readline.question('Tell me your name!: ');
console.log(name + ' You are now trapped in a room, you have 3 options:');

while (!findKey && !dead) {
    let options = ['Reach your hand through the wall', 'Try the Door', 'Look for a key to open the door'];
    const yourChoice = readline.keyInSelect(options, "make your choice!");
    if (yourChoice === 0) {
        dead = true
        console.log('Oh no, Deadly Snakebite killed your player');
    } else if (yourChoice === 2) {
        findKey = true
        console.log('Congratulations, You win, You found the key now you can escape by unlocking the door');
        console.log('---GameOver--')
    } else if (yourChoice === 1) {
        console.log('You must find the key first');
    }
}