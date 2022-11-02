const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flowerSchema = new Schema({
    flowerName: {
        type: String,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    bedId: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Flower', flowerSchema)