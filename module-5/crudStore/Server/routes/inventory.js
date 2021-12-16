const express = require('express');
const router = express.Router();
const config = require('config');
const Inventory = require('../models/inventory');

router.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
    router.post((req, res, next) => {
        const newInventory = new Inventory(req.body);
        newInventory.save((err, saveInventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully added, ${savedInventory.name} to the Inventory.`)
        })
    });
    router.delete('/:inventoryId', (req, res, next) => {
        Inventory.findOneAndRemove({ _id: req.params.inventoryId }, (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        })
    })
    router.get((req, res, next) => {
        Inventory.findById(req.params.inventoryId, function (err, item) {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(item);
        })
    })
    router.put((req, res, next) => {
        Inventory.findOneAndUpdate({ _id: req.params.inventoryId }, req.body,
            { new: true },
            (err, updatedItem) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(updatedItem);
            })
    })
})
module.exports = router;