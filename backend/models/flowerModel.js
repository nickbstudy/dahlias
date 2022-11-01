const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flowerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
})

const planterSchema = new Schema({
    planterName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(Flower, flowerSchema)