/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {

    //set comparison values for testing input strings for vowels.
    let arr = ['a', 'e', 'i', 'o', 'u'];

    //initial count value is set to zero, waiting on loops to find a count of vowels in each string
    var vowelsCount = 0;

    //loop through the array by targeting length
    //also loop through the count, nested loop. 
    for (let i = 0; i < arr.length; i++) {

        //loop the str length and compare to arr values.
        for (let j = 0; j < str.length; j++) {

            //compare the count to index in array increase the count of characters in each string.
            if (str[j] === arr[i]) {
                //count before
                console.log(str)
                vowelsCount++;
                console.log(vowelsCount)
            }
        }
    }
    return vowelsCount;
}
/* each string char is counted and compared to reference array, if a vowel is present the count will increase. Return total vowels in each string input */

getCount('abracadabra')
getCount('pear tree')
getCount('o a kak ushakov lil vo kashu kakao')
getCount('my pyx')






