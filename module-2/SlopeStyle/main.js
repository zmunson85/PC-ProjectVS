/* green */
/* use rest operator, spread the rest of the values in the param 
to help this function return an array of animals, no matter how many animals are passed to it:

*/
function collectAnimals(...animals) {
    /*and here*/
    return animals
}

//starting array with 5 values
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
//added more animals to the array to show the same outcome with 10 values or as many as you want. 
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "Moose", "Rat", "Rabbit", "Donkey", "Elephant"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]
/* ----------------------Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:-----------------------------------------
 */
function combineFruit(fruit, sweets, vegetables) {
    return {
        /* destructure the function */
        fruit: fruit,
        sweets: sweets,
        vegetables: vegetables
    }
}
/* Fruits array, Sweets array, Vegetables array, values inside the object.  */
console.log(combineFruit(['apple', 'banana', 'strawberries', 'melon'], ['cake', 'pie', 'candy', 'cookies'], ['carrot', 'potatoes', 'tomatoes']));

/* destructure this data and build array values with this content to start with */
// combineFruit(["apple", "pear"],
//     ["cake", "pie"],
//     ["carrot"])
// //=> {
// fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }
/* ---------------------------Use destructuring to use the property names as variables. Desructure the object in the parameter:------------------------------------
 */
const trip = {
    location: 'Burly Idaho',
    duration: '2 weeks'
};

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(trip));
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });


/* ---------------------------------------------------------------
*/
function returnFirst(items) {
    const [firstItem] = items;     /*change this line to be es6*/
    return firstItem;
}
console.log(returnFirst(['a', 'b', 'c']));




/* ------------------------This syntax names our first and our third variable. How would we name our second? The one at index 1? We'd make up a name between the commas. Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:---------------------------------------
*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    let [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, " + ${firstFav} + ", " + ${secondFav} + ", and " + ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));




/* ---------------------Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.------------------------------------------
*/


function combineAnimals(first, second, third) {
    console.log(...first + '= First Array');
    console.log(...second + '= Second Array');
    console.log(...third + '= Third Array');
    return [...first, ...second, ...third];
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]



/* -----------------------Try to make the following function more ES6xy:--------------------------------- */
function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}




/* ---------------------------------------------------- */


function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}
console.log(product(1, 2, 3, 4, 5))




/* ----------------------Make the following function more ES6xy. Use at least both the rest and spread operators:------------------------------ */

function unshift(array, ...letters) {
    return [...letters, ...array];
}
console.log(unshift([1, 2, 3,], 'a', 'b', 'c'));

/* ----------------------Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it------------------------------ */
function populatePeople(names) {
    //use arrow function instead and object notation inside the name loop, split index first and last names  return object. 
    return names.map((name) => {
        let [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]