
const express = require('express');
const bountyRouter2 = express.Router();
const uuid = require('uuid').v4;


const bounty2 = [
    { firstName: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmount: 500, type: "Sith", _id: uuid() },
    { firstName: "Master", lastName: "Yoda", living: true, bountyAmount: 10000, type: "Jedi", _id: uuid() },
    { firstName: "Luke", lastName: "SkyWalker", living: true, bountyAmount: 100000, type: "Jedi", _id: uuid() },
    { firstName: "Darth", lastName: "Maul", living: true, bountyAmount: 100000, type: "Sith", _id: uuid() },
    { firstName: "Princess", lastName: "Leia", living: true, bountyAmount: 50000, type: "Jedi", _id: uuid() },
    { firstName: "TEST", lastName: "THIS", living: true, bountyAmount: 50000, type: "SHOWS ITS WORKING", _id: uuid() }
]


bountyRouter2.get('/', (req, res) => {
    res.send(bounty2)
})

bountyRouter2.route('/')
    .get((req, res) => {
        res.send(bounty2)
    })
    .post((res, req) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounty2.push(newBounty)
        res.send(`${newBounty.firstName}, ${newBounty.lastName} has been successfully added to the Database!`)
    })

//get one bounty obj
bountyRouter2.get('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyFound = bounty2.find(bounty => {
        return bounty._id === bountyId;
    })
    res.send(bountyFound);
})

//get type of bounty
bountyRouter2.get('/search/type', (req, res) => {
    const type = req.query.type
    const results = bounty2.filter(bounty => bounty.type === type)
    res.send(results)
});

//delete a single bounty
bountyRouter2.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounty2.findIndex(bounty => bounty2._id === bountyId)
    bounty2.splice(bountyIndex, 1);
    res.send('Item has been removed from database!')
})

//update a single bounty

bountyRouter2.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounty2.findIndex(bounty2[bountyIndex], req.body);
    const update = Object.assign(bounty2[bountyIndex], req.body);
    res.send(update)
    res.send()
});

module.exports = bountyRouter2;