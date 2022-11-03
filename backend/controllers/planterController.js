const Planter = require('../models/planterModel')
const mongoose = require('mongoose')

// get all planters
const getPlanters = async (req, res) => {
    try {
        const flowerBed = await Planter.find({})
        res.status(200).json(flowerBed)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const createPlanter = async (req, res) => {
    const { planterName } = req.body
    if (!planterName) {
        res.status(400).json({error: "Name must not be empty"})
    }
    const existing = await Planter.exists({ planterName: planterName})
    
    if (existing) {
        res.status(401).json({error: "Planter with that name already exists"})
    } else {
        try {
            const newPlanter = await Planter.create({ planterName: planterName })
            res.status(200).json(newPlanter)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    
}

// const deletePlanter = async (req, res) => {
//     const { planterName } = req.params
    
//     if (!mongoose.Types.ObjectId.isValid(planterName))

module.exports = { getPlanters, createPlanter }