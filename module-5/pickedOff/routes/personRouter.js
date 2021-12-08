const express = require('express');
const personRouter = express.Router();
const uuid = require('uuid').v4

const people = [
    { firstName: 'Brad', lastName: 'Pitt', gender: 'Male', occupation: 'Actor', _id: uuid() },
    { firstName: 'Kate', lastName: 'Upton', gender: 'Female', occupation: 'Model', _id: uuid() },
    { firstName: 'Tom', lastName: 'Brady', gender: 'Male', occupation: 'NFL QB', _id: uuid() },
    { firstName: 'Jeff', lastName: 'Gordon', gender: 'Male', occupation: 'Race Car Driver', _id: uuid() }
]

personRouter.route('/').get((req, res) => {
    res.send(people)
}).post((req, res) => {
    const newPerson = req.body;
    newPerson._id = uuid();
    people.push(newPerson);
    res.send(`${newPerson.firstName}, ${newPerson.lastName} has successfully been added to the list!`);
})

//get one

personRouter.get('/search/:firstName', (req, res) => {
    const firstName = req.params.firstName;
    const getAFirstName = people.filter(person => person.firstName === firstName);
    res.send(getAFirstName);
})

//postman request firstName-   http://localhost:5000/person/search/Brad?firstName=Brad

personRouter.get('/search/:occupation', (req, res) => {
    const firstName = req.params.occupation;
    const getAFirstName = people.filter(person => person.firstName === firstName);
    res.send(getAFirstName);
})
module.exports = personRouter;