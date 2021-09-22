var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

console.log('POP METHOD')
/* removes the last element from an array, pop() will return the element it removes, pop changes the length of the array */
vegetables.pop();
console.log(vegetables);

/* shift will remove the first element in an array, to "PRE PEND the list" use shift, it will create a new 0 index with this value and shift the remaining elements to the next index/node in the array */
console.log('SHIFT METHOD')
fruit.shift();
console.log(fruit);

/* this method searches an array for a specified item and returns its position in the array. The search will start at the specified position (at 0 if no start position is specified), and end the search at the end of the array. indexOf() returns -1 if the item is not found. If the item is present more than once, the indexOf method returns the position of the first occurence. Search end to start with indexOf - lastIndexOf()  */
console.log('Find Index');
var orangeIndex = fruit.indexOf('orange');
console.log(orangeIndex);

fruit.push(orangeIndex);
console.log(fruit);



/* push method will add a new element to the end of an array.  */


console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(vegetables);

var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
var foodString = food.join(" ")



console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(foodString)
