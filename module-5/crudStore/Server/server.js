const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }));


app.get('/', (req, res) =>
    res.json({ msg: "My CrudStore Api" }));

//api routes

app.use('/inventory', require('./routes/inventory'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));