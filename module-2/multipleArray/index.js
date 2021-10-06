// You should use multiple array methods to solve these problems. Don't use for loops!

// Using the provided peopleArray (bottom of this article), write a function that:

//     Returns a list of everyone older than 18, which is
//     sorted alphabetically by last name, and where
//     each name and age is embedded in a string that looks like an HTML <li> element.
function sortedOfAge(arr) {
    arr.sort(function (a, b) {
        const textA = a.firstName.toUpperCase();
        const textB = b.lastName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return arr.reduce(function (final, person) {
        if (person.age >= 18)
            final.push(`<li> ${person.firstName} ${person.lastName} age: ${person.age} </li>`)
        return final;
    }, [])
}


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
console.log(sortedOfAge(peopleArray));