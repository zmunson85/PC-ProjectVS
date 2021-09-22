const readlineSync = require('readline-sync');

let playerName = readlineSync.question('Hello, Welcome to the console game. You need to slay the food tray! Easy enough right \n please enter your Name:>>');

console.log('Hey ' + playerName + ', Let us start, what do you choose first?');
/* Create a player constructor */
class Player {
    constructor(player, hp, ap) {
        this.player = player
        this.hp = hp
        this.ap = ap
        this.inventory = []
        this.enemyKilled = 0;
    }
    //player is alive Function
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;

        }
    }
}
const newPlayer = new Player(playerName, 350, 350)

class Inventory {
    constructor(item, hp) {
        this.item = item
        this.hp = hp
    }
}

const sportDrink = new Inventory('sportDrink', 200);
/* Create Enemy Constructor   */
class Enemies {
    constructor(enemy, hp, ap) {
        this.enemy = enemy
        this.hp = hp
        this.ap = hp
    }
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}

const brownSwagger = new Enemies('BrownSwagger', 100, 130);
const fudgeBrownies = new Enemies('FudgeBrownies', 200, 180);
const jellyDoughNuts = new Enemies('JellyDoughNuts', 240, 200);
const gummyBears = new Enemies('gummyBears', 280, 200);
const hotTamales = new Enemies('hotTamales', 260, 220);
let enemies = [brownSwagger, fudgeBrownies, jellyDoughNuts, gummyBears, hotTamales];

while (newPlayer.isAlive()) {
    const commands = readlineSync.keyIn('[w]Walk\n[i]Inventory\n[u]Use Item\n[q]Quit Game\n', { limit: 'wiuq' });
    if (commands == 'w') {
        walk()
    } else if (commands == 'i') {
        showInventory()
    } else if (commands == 'u') {
        useItem(sportDrink)
    } else if (commands == 'q') {
        if (enemies.length > 0) {
            console.log('You quit without defeating all the enemies');
            break;
        }
    } else {
        console.log('Thanks for your help, we knocked out all those delicious treats/ enemies!!');
        break;
    }
}

function walk() {
    const odds = Math.random();
    if (odds > .5) {
        console.log('The Coast is Clear Right Now!');
    } else {
        enemyEncounter()
    }
}
function showInventory() {
    console.log(newPlayer);
}
function enemyEncounter() {
    if (enemies.length == 0) {
        console.log('You did it! You eliminated all the sweets....');
        let end = readlineSync.keyIn('[q] for quit', { limit: 'q' })
    } else {
        let newEncounter = enemies[Math.floor(Math.random() * enemies.length)];
        console.log('*DANGER* Its ' + newEncounter.enemy + ' the only way to defeat is to eat!!! who needs a fork?');
        console.log(newEncounter);
        firstFight(newEncounter);
    }
}
function firstFight(newEncounter) {
    while (newPlayer.isAlive() && newEncounter.isAlive()) {
        const fightOptions = readlineSync.keyIn('[r]RunAway\n[e]Engage-Attack\n[u]SportsDrink\n[q]You can quit the game', { limit: 'reuq' });

        const chanceOfEscape = Math.random()
        if (fightOptions === 'r') {
            if (chanceOfEscape > 0.5) {
                console.log('Being afraid wont help you eat them, you need to get in the fight. need something to wash it down?? Check Inventory or Find A SportDrink');
                return;
            } else {
                enemyAttack(newEncounter)
            }
        } else if (fightOptions === 'e') {
            playerAttack(newEncounter);
            enemyAttack(newEncounter);
        } else if (fightOptions === 'u') {
            useItem();
        } else if (fightOptions === 'q') {
            console.log('Quitting now will not solve anything, You have to start again!')
        }
    }
    if (newPlayer.hp == 0) {
        console.log('Player has been killed by enemyEncounters.... Try again, better luck next time!')
    } else if (newEncounter.hp == 0) {
        enemyKilled(newEncounter);
        console.log(newEncounter.enemy + ' has been eliminated. You have earned 200 HP as a Reward');
        findItem(sportDrink);
        console.log('Look, at that ' + newEncounter.enemy + ' died and dropped this item for you, you earned a sports drink worth 200hp!' + sportDrink.item)
    }
}
function enemyAttack(newEncounter) {
    newPlayer.reduceHP(Math.floor(Math.random() * newEncounter.ap));
    console.log('Ouch, Your Taking Damage' + newEncounter.enemy + ' hp remaining: ' + newPlayer.hp);
}
function playerAttack(newEncounter) {
    newEncounter.reduceHP(Math.floor(Math.random() * newPlayer.ap));
    console.log('You are showing off now ' + newEncounter.enemy + ' HP remaining: ' + newEncounter.hp);
}
/* reward for killing enemyEncounter */
function enemyKilled(newEncounter) {
    let encounterSP = enemies.indexOf(newEncounter);
    enemies.splice(encounterSP, 1);
    newPlayer.hp += 100;
    newPlayer.enemyKilled++;

}

/* add an item to inventory */
function findItem(sportDrink) {
    newPlayer.inventory.push(sportDrink)
}

/* use am item from inventory increase hp */
function useItem() {
    if (newPlayer.inventory.length == 0) {
        console.log('Your inventory is empty..you can eat from the tray to unlock a drink')
    } else {
        newPlayer.hp += 200;
        console.log('You added 200HP');

        newPlayer.inventory.shift();
    }
}