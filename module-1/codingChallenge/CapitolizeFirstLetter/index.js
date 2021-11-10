// Today’s Coding Challenge: 'Title Case a Sentence' return the provided string with the first letter of each word capitalized. Also capitalize connecting words like 'the' and 'of'.
//

function titleCase(str) {


    return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.substr(1)).join(' ')
}
console.log(titleCase('I’m a little tea pot'));
