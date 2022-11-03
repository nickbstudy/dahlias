const express = require('express')
const { getPlanters, createPlanter, getPlanterByName } = require('../controllers/planterController')


const router = express.Router()


router.get('/planters', getPlanters)

router.post('/planters', createPlanter)

router.post('/plantersid', getPlanterByName)

module.exports = router