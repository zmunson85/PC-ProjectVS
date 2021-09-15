var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

console.log('POP METHOD')

vegetables.pop();
console.log(vegetables);


console.log('SHIFT METHOD')
fruit.shift();
console.log(fruit);


console.log('Find Index');
var orangeIndex = fruit.indexOf('orange');
console.log(orangeIndex);

fruit.push(orangeIndex);
console.log(fruit);

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
