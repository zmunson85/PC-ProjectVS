/* Sort an array from smallest number to largest */

function leastToGreatest(arr) {
    let result = arr.sort(function (a, b) {
        /* start point end point, take all elements and sort them from point a to point b */
        return a - b;
    });
    return result
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

/* Sort an array from largest number to smallest */

function greatestToLeast(arr) {
    let result = arr.sort(function (a, b) {
        /* start point end point, take all elements and sort them from point b to point a */
        return b - a;
    });
    return result
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

/* Sort an array from shortest string to longest */

function lengthSort(arr) {
    let result = arr.sort(function (a, b) {
        /* start point end point, take all elements and sort them from point a to point b since each value is a string I can attach length to each variable to get the lenth of each string, since it is sorting from a to b it will put the shortest string first and the longest string last */
        return a.length - b.length;
    });
    return result

}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]


/* Sort an array alphabetically */
//using sort method that returns the compared values and returns the values in alphabetical order as result
function alphabetical(arr) {
    let result = arr.sort(function (a, b) {
        return a.localeCompare(b);
    })
    return result;
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

/* Sort the objects in the array by age */

function byAge(arr) {
    let result = arr.sort(function (a, b) {
        return a.age - b.age;
    })
    return result;
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]