const express = require('express')
const { getFlowers, plantFlower } = require('../controllers/flowerController')


const router = express.Router()


router.post('/flowersid', getFlowers)

router.post('/flowers', plantFlower)


module.exports = router