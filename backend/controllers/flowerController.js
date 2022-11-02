const Flower = require('../models/flowerModel')
const mongoose = require('mongoose')

// get all flowers
const getFlowers = async (req, res) => {
    const { bedId } = req.body
    const flowerBed = await Flower.find({ bedId: bedId }).sort({location: 1})
    res.status(200).json(flowerBed)
}


// plant 1 flower
const plantFlower = async (req, res) => {
 
    const { location, bedId } = req.body;
    const existing = await Flower.findOne({ location: location, bedId: bedId })

    if (!existing) {
        console.log('not found, creating new')
        try {
            const { flowerName, location, bedId } = req.body
            const newFlower = await Flower.create({flowerName, location, bedId})
            res.status(200).json(newFlower)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    } else {
        console.log('already exists, overwriting...')
        try {
            const { flowerName, location, bedId } = req.body
            existing.overwrite({ flowerName: flowerName, location: location, bedId: bedId})
            await existing.save()   
            res.status(200).json(existing)
        } catch (error) {
            res.status(400).json({error: error.message})
        }   
    }
}

module.exports = { getFlowers, plantFlower }