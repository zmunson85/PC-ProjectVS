
const express = require('express');
const bountyRouter = express.Router();
const uuid = require('uuid').v4;

const bounty = [
    { firstName: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmount: 500, type: "Sith", _id: uuid() },
    { firstName: "Master", lastName: "Yoda", living: true, bountyAmount: 10000, type: "Jedi", _id: uuid() },
    { firstName: "Luke", lastName: "SkyWalker", living: true, bountyAmount: 100000, type: "Jedi", _id: uuid() },
    { firstName: "Darth", lastName: "Maul", living: true, bountyAmount: 100000, type: "Sith", _id: uuid() },
    { firstName: "Princess", lastName: "Leia", living: true, bountyAmount: 50000, type: "Jedi", _id: uuid() }
]

//1. Endpoint, (mount path)
//2. callback function
bountyRouter.get('/', (req, res) => {
    res.send(bounty)
})

//post new data to api from post man with app.post
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`You have added ${newBounty.firstName}, ${newBounty.lastName}  to the kill list with a total Reward Bounty set to:  ${newBounty.bountyAmount}`)
})

module.exports = bountyRouter;