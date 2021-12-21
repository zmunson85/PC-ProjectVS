const mongoose = require("mongoose")
const Schema = mongoose.Schema



const BountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true,

    }

})



module.exports = mongoose.model("Bounty", BountySchema)
