/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {

    //set array initial value
    let arr = ['a', 'e', 'i', 'o', 'u'];

    var vowelsCount = 0;

    //loop through the array by targeting length
    //also loop throguh the count, nested loop. 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            //compare the count to index in array increase the count
            if (str[j] === arr[i]) {
                console.log(vowelsCount)
                vowelsCount++;
                console.log(vowelsCount)
            }
        }
    }
    // enter your majic here

    return console.log(vowelsCount);
}
/* the strings are counted and value is returned with each string parameter. */

getCount('abracadabra')
getCount('pear tree')
getCount('o a kak ushakov lil vo kashu kakao')
getCount('my pyx')
