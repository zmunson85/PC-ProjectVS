const express = require('express');

const connectDB = require('./config/db');
const path = require('path');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/bounties', require('./routes/bountyRouter'));


if (process.env.NODE_ENV === 'production') {
    //client build folder
    //import path, create a path instance navigating to index.html
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));