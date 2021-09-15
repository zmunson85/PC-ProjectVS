const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
let count = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer') {
        count++
        console.log('computer count is ' + count);
    }
}

function addObject(j) {
    const nameAge = document.createElement('div');
    const objAge = document.createTextNode(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "'s gender is " + peopleWhoWantToSeeMadMaxFuryRoad[j].gender + ' & ' + peopleWhoWantToSeeMadMaxFuryRoad[j].name + "'s age is " + ' ' + peopleWhoWantToSeeMadMaxFuryRoad[j].age);

    nameAge.appendChild(objAge);
    const nextDiv = document.getElementById('container');
    document.body.insertBefore(nameAge, nextDiv);
}


function addElement() {
    // create a new div element
    let newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode('computer count is ' + count);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("container");
    document.body.insertBefore(newDiv, currentDiv);
}
addElement();

let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

let minAge = 18;

for (let j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[j].age < minAge) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + ':' + ' Mad max is not good for your young eyes!')
    } else (console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + ':' + ' You are an Adult, you can watch any movie you like!'))
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "'s gender is " + peopleWhoWantToSeeMadMaxFuryRoad[j].gender + ' & ' + peopleWhoWantToSeeMadMaxFuryRoad[j].name + "'s age is " + ' ' + peopleWhoWantToSeeMadMaxFuryRoad[j].age)

    addObject(j);
}


/* be sure to check local vs global scope */


