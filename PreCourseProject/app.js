const person = {
    name: ['Zachary', ' Munson'],
    age: 35,
    hobbies: ['Family-Adventures', 'Fishing', 'Hiking'],
    funFact: ['Served In US Army for 10 years']

}
function addBio() {
    let bio = document.createElement('H1');
    bio.innerHTML = person.name + ' is ' + person.age + ' years young.' + ' His hobbies are ' + person.hobbies[0] + ', ' + person.hobbies[1] + ', ' + person.hobbies[2] + ' and he ' + person.funFact;

    document.getElementById('header').appendChild(bio);
}

for (i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log('even');
    }
    else {
        console.log(i);
    }
}

