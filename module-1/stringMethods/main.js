console.log('---------------------------toUpper/toLower--------------------------------------')

let thisStr = 'HELLO'
let string = 'hello'
function lowerUpper() {
    let strUpper = string.toUpperCase();
    let strLower = thisStr.toLowerCase();

    return console.log(strUpper + strLower);
}
lowerUpper();


console.log('-----------------------------------Math.floor------------------------------');

let phrase = 'hello'
let phraseRecip = 'hello world'
function findMidIndex() {
    let mid = (phrase.length) / 2;
    let mid2 = (phraseRecip.length) / 2;
    console.log('hello mid index is: ' + Math.floor(mid));
    console.log('hello world mid index is: ' + Math.floor(mid2));

}

findMidIndex();


console.log('------------------------------Slice-----------------------------------');

let myString = 'Hello';
let myString2 = 'Hello World';

function firstHalf() {

    let halfString = myString.slice(0, 2);//half of "hello" is 2 according to our findMid so start and index 0 and stop at index 2 it will cut off index2-the end of the array.

    let halfString2 = myString2.slice(0, 5);//half of "hello world" is 5 according to our findMid so start and index 0 and stop at index 5 it will cut off index2-the end of the array.
    console.log(halfString);
    console.log(halfString2);
}

firstHalf();
console.log('------------------------------Tricky-----------------------------------');



function mixedUp(myString) {
    let halfIndex = findMidIndex(myString);
    let firstPart = myString.slice(0, halfIndex);
    let secondPart = myString.slice(halfIndex, myString.length);
    let newStr = firstPart.toUpperCase() + secondPart.toLowerCase();
    return newStr;
}
mixedUp('Hello');
mixedUp('Hello World');







