const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const { MONGO_URI } = process.env;

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB Atlas is connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;