
for (let i = 0; i <= 100; i++) {
    let output = [];

    //all numbers divisible by 3 &&/ or all numbers divisible by 5 that both have a remainder of 0, result= "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(output += "FizzBuzz");
        //all numbers that are only divisible by 3 and not 5, result="Fizz"
    } else if (i % 3 === 0) {
        console.log(output += "Fizz");
        //all numbers that are only divisible by 5 and not 3, result="Buzz"
    } else if (i % 5 == 0) {
        console.log(output += "Buzz");
        //else is a catch all for all reamaing numbers that are not divisible by 5 or 3 in which case we print the number in that index. 
    } else
        console.log(output = i);
    let result = output.map(item, index => {
        console.log(item);
        return index
    })
    return result



}
