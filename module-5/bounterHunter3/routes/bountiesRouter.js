const express = require("express");
const bountiesRouter = express.Router();
const uuid = require("uuid").v4;


const bounties = [
    { firstName: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmount: 500, type: "Sith", _id: uuid() },
    { firstName: "Master", lastName: "Yoda", living: true, bountyAmount: 10000, type: "Jedi", _id: uuid() },
    { firstName: "Luke", lastName: "SkyWalker", living: true, bountyAmount: 100000, type: "Jedi", _id: uuid() },
    { firstName: "Darth", lastName: "Maul", living: true, bountyAmount: 100000, type: "Sith", _id: uuid() },
    { firstName: "Princess", lastName: "Leia", living: true, bountyAmount: 50000, type: "Jedi", _id: uuid() },
    { firstName: "Zach", lastName: "Munson", living: true, bountyAmount: 100000, type: "Space Ranger", _id: uuid() }
]
// Get all and post
bountiesRouter
    .route("/")
    .get((req, res) => {
        res.status(200).send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    });

// Get one
bountiesRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find((bounty) => bounty._id === bountyId)
    if (!foundBounty) {
        const error = new Error(`The item with id ${bountyId} found.`)
        res.status(500)
        return next(error)
    };
    res.status(200).send(foundBounty);
});

// Get by type
bountiesRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type;
    const filteredBounties = bounties.filter((bounty) => bounty.type === type);
    if (!filteredBounties) {
        const error = new Error(`The bounty with type ${type} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(filteredBounties);
});

//Delete one
bountiesRouter.delete("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
    bounties.splice(bountyIndex, 1);
    res.status(201).send("bounty removed");
});

//Update one
bountiesRouter.put("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
    if (!updatedBounty) {
        const error = new Error(`something went wrong`)
        res.status(500)
        return next(error)
    }
    res.status(201).send(updatedBounty);
});

module.exports = bountiesRouter;