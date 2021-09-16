
// /* the assignment shows all the letters as their own string, given the array above we need to split each letter but also capitalize them too, so start with method to upperCase then .split should break the array up into individual capitalized strings. */
// var capAlpha = alphabet.toUpperCase().split('');

// /* It shows each name dividing a new run of the upercase alphabet with a colon :. so concat with a + to add the : after the arr index should do the trick, but to add the updatedArr we need to run another for loop to run the length of both arrays  */



var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var updatedArr = [];

function forception() {

    for (var i = 0; i < people.length; i++) {
        // This creates a new array and pushes the names plus a ":"
        updatedArr.push(people[i] + ":")
        for (var j = 0; j < alphabet.length; j++) {
            // This loops through the new alphabet and pushes each letter to the new array
            updatedArr.push(alphabet[j].toUpperCase())
        }
        console.log(updatedArr);
    }
    return updatedArr;
}
forception()

