/*  Turn an array of numbers into a total of all the numbers */

function total(arr) {
    return arr.reduce(function (final, current) {
        final += current;
        return final;
    })
}
console.log(total([1, 2, 3]));


/* Turn an array of numbers into a long string of all those numbers. */


function stringConcat(arr) {
    return arr.reduce(function (final, num) {
        final += num;
        return final.toString() + num.toString();
    })
}
console.log(stringConcat([1, 2, 3]))
console.log(stringConcat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


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