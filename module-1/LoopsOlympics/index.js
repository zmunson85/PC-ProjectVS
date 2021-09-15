console.log('________________Preliminaries_________________________')
/* loop 0-9, it will break before 10 because < symbol */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* decrement from 9 to zero. 0 is equal to 0 so you have to go one number beyond 0 which is -1 */
for (let j = 9; j > -1; j--) {
    console.log(j);

}
/*  you can console log the iterator but it will only print the index, we want the index value, which is stored in the array[index]. so fruit[k] in this case. */
const fruit = ['banana', 'orange', 'apple', 'kiwi'];
for (let k = 0; k < fruit.length; k++) {
    console.log(fruit[k]);
}



console.log('_________________BRONZE ________________________')

/* push value to an empty array */
let arr = [];
for (let l = 0; l < 10; l++) {
    arr.push(l);
    console.log(arr);
}

console.log('__________________print evens 0-100_______________________')

/* print even nums 0-100 */
for (let m = 0; m < 101; m++) {
    if (m % 2 == 0) {
        console.log(m);
    }
}
console.log('___________________push every other fruit into the array_____________________')

let fruitArr = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
let arrFruit = [];
console.log('original array: ' + fruitArr);
for (let n = 0; n < fruitArr.length; n++) {
    if (n % 2 == 0) {
        arrFruit.push(n);
        console.log('every other index/fruit is printed here ' + fruitArr[n]);
    }
}

console.log('___________________people of people array_____________________')


const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
];

for (let o = 0; o < peopleArray.length; o++) {
    console.log(peopleArray[o].name);
}




let nameArr = [];
let occupationArr = [];
for (let p = 0; p < peopleArray.length; p++) {
    nameArr.push(peopleArray[p].name);
    occupationArr.push(peopleArray[p]);

}


console.log('________________________________________')
let everyOtherName = [];
let everyOtherOccupation = [];
for (let q = 0; q < peopleArray.length; q++) {
    if (q % 2 == 0) {
        everyOtherName.push(peopleArray[q].name)
        console.log(everyOtherName);
    }
}
for (let r = 0; r < peopleArray.length; r++) {
    if (r % 2 == 0) {
        everyOtherOccupation.push(peopleArray[r].occupation);
        console.log(everyOtherOccupation);
    }
}

// console.log('________________________________________');


/* Create an array that mimics a grid like the following using nested for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]
2.Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
3.Create an array that mimics a grid like the following using nested for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...]  */

// let arrayOfArrays = [];
// for (let s = 0; s <= 0; s++) {
//     let array1 = [];
//     for (let t = 0; t <= 0; t++) {
//         array1.push(t)
//     }
//     arrayOfArrays.push(array1)
//     console.log(arrayOfArrays)
// }
let arrayOfArrays1 = [];
for (let u = 0; u <= 2; u++) {
    let array2 = [];
    for (let v = 0; v <= 2; v++) {
        array2.push(v)
    }
    arrayOfArrays1.push(array2)
    console.log(arrayOfArrays1)
}
