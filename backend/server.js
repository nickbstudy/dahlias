require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const flowerRoutes = require('./routes/flowers')
const planterRoutes = require('./routes/planters.js')

// Start up express
const app = express()

// - middleware to log route
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })
app.use(express.json())

// routes
app.use('/api', flowerRoutes)
app.use('/api', planterRoutes)

// DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to Mongo and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


// Listen for requests