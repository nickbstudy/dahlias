const express = require('express')
const { getFlowers, plantFlower } = require('../controllers/flowerController')


const router = express.Router()


router.get('/flowers', getFlowers)

router.post('/flowers', plantFlower)


module.exports = router