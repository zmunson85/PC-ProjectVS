/* green */
/* use rest operator, spread the rest of the values in the param */
function collectAnimals(...animals) {
    /*and here*/
    return animals
}

//starting array with 5 values
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
//added more animals to the array to show the same outcome with 10 values or as many as you want. 
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "Moose", "Rat", "Rabbit", "Donkey", "Elephant"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]
/* ---------------------------------------------------------------
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
/* ---------------------------------------------------------------
 */

