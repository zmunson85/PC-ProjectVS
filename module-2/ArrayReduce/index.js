console.log('_________________1________________');
/*  Turn an array of numbers into a total of all the numbers */

function total(arr) {
    return arr.reduce(function (final, current) {
        final += current;
        return final;
    })
}
console.log(total([1, 2, 3]));


console.log('_________________2________________');
/* Turn an array of numbers into a long string of all those numbers. */

function stringConcat(arr) {
    return arr.reduce(function (final, num) {
        final += num;
        return final.toString() + num.toString();
    })
}
console.log(stringConcat([1, 2, 3]))
console.log(stringConcat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log('_________________3________________');
/* Turn an array of voter objects into a count of how many people voted */

function totalVotes(voters) {
    return voters.reduce(function (final, voter) {
        if (voter.voted) {
            final++
        } else {
            voter.voted === false;
            console.log(`${voter.name} age:${voter.age} Didn't Vote`)
        }
        return final
    }, 0);

}
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

/* Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once */
console.log('_________________4________________');
function shoppingSpree(wishlist) {
    return wishlist.reduce(function (final, gift) {
        return final += gift.price
    }, 0);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


console.log('_________________5________________');
/* Given an array of arrays, flaten them into a single array */

function flatten(arr) {
    return arr.flat();
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

console.log('_________________6________________');
/* 
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom. */

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    return arr.reduce(function (final, voter) {
        if (voter.age <= 26)
            voter.voted ? (final.numYoungVotes++, final.numYoungPeople++) : final.numYoungPeople++;
        else if (voter.age >= 35)
            voter.voted ? (final.numOldVotes++, final.numOldPeople++) : final.numOldPeople++;
        else voter.voted ? (final.numMidVotes++, final.numMidPeople++) : final.numMidPeople++;

        return final;
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0,
        numMidPeople: 0,
        numOldVotes: 0,
        numOldPeople: 0
    })
}

console.log(voterResults(voters)); // Returned value shown below:


