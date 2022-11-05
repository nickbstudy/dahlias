const express = require('express')
const { getFlowers, plantFlower, deleteFlower } = require('../controllers/flowerController')


const router = express.Router()


router.post('/flowersid', getFlowers)

router.post('/flowers', plantFlower)

router.post('/flowersdel', deleteFlower)

module.exports = router