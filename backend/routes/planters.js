const express = require('express')
const { getPlanters, createPlanter } = require('../controllers/planterController')


const router = express.Router()


router.get('/planters', getPlanters)

router.post('/planters', createPlanter)


module.exports = router