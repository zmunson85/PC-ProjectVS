const express = require('express')
const router = express.Router()
const bounty = require("../models/bounty")

router.route("/")
    .get((req, res, next) => {
        bounty.find((err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })
    .post((req, res, next) => {
        const newBounty = new bounty(req.body)
        newBounty.save((err, newBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newBounty)
        })
    })
router.route("/:bountyId")
    .get((req, res, next) => {
        bounty.findById(req.params.bountyId, (err, bounty) => {
            if (err) {
                res.status(500)
                const err = new Error(`The item with id ${req.params.bountyId} was not found`)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })
    .delete((req, res, next) => {
        bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedBounty)
        })
    })
    .put((req, res, next) => {
        bounty.findOneAndUpdate(
            { _id: req.params.bountyId },
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(updatedBounty)
            }
        )
    })
module.exports = router;