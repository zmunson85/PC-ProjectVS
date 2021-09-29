/* make an array of numbers that are doubles of the first array */

function doubleNumbers(arr) {
    return arr.map(function (num) {
        return num * 2;
    })
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

/* Take an array of numbers and make them strings */
function stringItUp(arr) {
    return arr.map(function (num) {
        return num.toString();
    })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

/* Capitalize each of an array of names */
function capitalizeNames(arr) {
    return arr.map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

/* Make an array of strings of the names */

function namesOnly(arr) {
    return arr.map(function (object) {
        return object.name;
    });
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


/* Make an array of strings of the names saying whether or not they can go to the Matrix */

function makeStrings(arr) {
    return arr.map(function (person) {
        if (person.age > 18) return `${person.name} is an adult they can enter the Matrix `; else return `${person.name} is under age, too young to enter the Matrix`
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


/* Make an array of the names in h1s, and the ages in h2s */
function readyToPutInTheDOM(arr) {
    return arr.map(function (person) {
        return `<h1>${person.name}</h1> <h2>${person.age}</h2>`
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
