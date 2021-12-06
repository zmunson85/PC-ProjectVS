const express = require('express');
const vehicleRouter = express.Router();
const uuid = require('uuid').v4;

//fake data

const vehicles = [
    { type: 'car', make: 'Honda', model: 'Civic', _id: uuid() },
    { type: 'car', make: 'BMW', model: 'M5', _id: uuid() },
    { type: 'Truck', make: 'Chevrolet', model: 'Silverado', _id: uuid() },
    { type: 'Truck', make: 'Ford', model: 'F150', _id: uuid() },
    { type: 'Van', make: 'Honda', model: 'Oddessy ', _id: uuid() },
    { type: 'Van', make: 'Dodge', model: 'Caravan', _id: uuid() },
    { type: 'Motorcycle', make: 'Harley-Davidson', model: 'Street Glide', _id: uuid() },
    { type: 'Motorcycle', make: 'Suzuki', model: 'GSXR-1000', _id: uuid() }

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
vehicleRouter.get('/search', (req, res) => {
    const type = req.query.type;
    //filter for the vehicle input from user will match make & model
    const searchType = vehicles.filter(vehicle => vehicles.type === type)
    const searchMake = vehicles.filter(vehicle => vehicles.make === make)
    const searchModel = vehicles.filter(vehicle => vehicles.model === model)
})

module.exports = vehicleRouter;