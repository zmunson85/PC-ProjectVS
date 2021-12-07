const express = require('express');
const vehicleRouter = express.Router();
const uuid = require('uuid').v4;

//fake data

const vehicles = [
    { type: 'car', make: 'honda', model: 'civic', _id: uuid() },
    { type: 'car', make: 'bmw', model: 'm5', _id: uuid() },
    { type: 'truck', make: 'chevrolet', model: 'silverado', _id: uuid() },
    { type: 'truck', make: 'ford', model: 'f-150', _id: uuid() },
    { type: 'van', make: 'honda', model: 'oddessy ', _id: uuid() },
    { type: 'van', make: 'dodge', model: 'caravan', _id: uuid() },
    { type: 'motorcycle', make: 'harley davidson', model: 'street glide', _id: uuid() },
    { type: 'motorcycle', make: 'honda', model: 'cbr-1000', _id: uuid() }

]

//set home view route
vehicleRouter.route('/').get((req, res) => {
    //send posted vehicles to array
    res.send(vehicles)
})
    //post route to add item
    .post((req, res) => {
        const newVehicle = req.body
        newVehicle._id = uuid();
        vehicles.push(newVehicle);
        res.send(`${newVehicle.vehicles} has been added to the list!`)
    })
//let user search the list of previously entered items
vehicleRouter.get('/search-type/:type', (req, res) => {
    console.log(req)
    const type = req.params.type;

    const searchType = vehicles.filter(vehicle => vehicle.type === type)
    // console.log(type)
    res.send(searchType)


})
vehicleRouter.get('/searchMake/:make', (req, res) => {
    console.log(req)
    const make = req.params.make;

    const searchMake = vehicles.filter(vehicle => vehicle.make === make)
    // console.log(type)
    res.send(searchMake)

})
vehicleRouter.get('/search-model/:model', (req, res) => {
    console.log(req)
    const model = req.params.model;

    const searchModel = vehicles.filter(vehicle => vehicle.model === model)
    // console.log(type)
    res.send(searchModel)

})



module.exports = vehicleRouter;