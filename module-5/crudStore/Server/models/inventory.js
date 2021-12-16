const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);