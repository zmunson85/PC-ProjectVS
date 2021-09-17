console.log('---------------------------toUpper/toLower--------------------------------------')

function lowerUpper(thisStr, string) {
    let strUpper = string.toUpperCase();
    let strLower = thisStr.toLowerCase();

    return console.log(strUpper + strLower);
}
lowerUpper('HELLO', 'hello');


console.log('-----------------------------------Math.floor------------------------------');


function findMidIndex(phrase, phraseRecip) {
    let mid = (phrase.length) / 2;
    let mid2 = (phraseRecip.length) / 2;
    console.log('hello mid index is: ' + Math.floor(mid));
    console.log('hello world mid index is: ' + Math.floor(mid2));

}

findMidIndex('Hello', 'Hello World');


console.log('------------------------------Slice-----------------------------------');



function firstHalf(myString, myString2) {

    let halfString = myString.slice(0, 2);//half of "hello" is 2 according to our findMid so start and index 0 and stop at index 2 it will cut off index2-the end of the array.

    let halfString2 = myString2.slice(0, 5);//half of "hello world" is 5 according to our findMid so start and index 0 and stop at index 5 it will cut off index2-the end of the array.
    console.log(halfString);
    console.log(halfString2);
}

firstHalf('Hello', 'Hello World');











