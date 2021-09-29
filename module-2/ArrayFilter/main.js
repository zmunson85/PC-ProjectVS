/* Given an array of numbers, return a new array that has only the numbers that are 5 or greater. */

//arr values are numbers so I can use num variable definition in the arrow function call in params for .filter() method.
function fiveAndGreaterOnly(arr) {
    let newArr = arr.filter(num => num > 5);
    console.log(`[${arr}] Original arr`);
    console.log(`[${newArr}] Filtered Greater Than 5`);
    return newArr;
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


/*  Given an array of numbers, return a new array that only includes the even numbers */
//arr values are numbers so use num as variable in arrow function, I will check if the values are even and return evens only
function evensOnly(arr) {
    let evenNums = arr.filter(num => num % 2 == 0);
    console.log(evenNums);
    return evenNums;
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

/* Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length */
//arr values are strings, so str for variable definition, also those strings have a length, so I can check for length <=5 chars/index and return those values only
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5);
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



/* Given an array of people objects, return a new array that has filtered out all those who don't belong to the club */
// this time the arrow function will take in an object, but also the member status of each object, I will return the boolean value of true if the person object is a member.
function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(object => object.member === true);
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]



/* Make a filtered list of all the people who are old enough to see The Matrix (older than 18) */

function ofAge(arr) {
    return arr.filter(object => object.age >= 18);
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
