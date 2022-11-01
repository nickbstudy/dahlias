const mongoose = require('mongoose')

const Schema = mongoose.Schema

const planterSchema = new Schema({
    planterName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Planter', planterSchema)