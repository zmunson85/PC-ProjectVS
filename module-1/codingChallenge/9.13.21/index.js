let readlineSync = require('readline-sync');

let wordList = {};
let word = '';
while (!word) {
    let newWord = readlineSync.question('Add A new word of your choice!');
    if (wordList[newWord]) {
        console.log(newWord);
    }
    let definition = readlineSync.question('What does that word mean?');
    wordList[newWord] = definition;
    console.log(wordList);
    break;

}