const express = require('express')
const router = express.Router()
const formControllers = require('../controllers/formControllers')

router.get('/addCompany',formControllers().init)
router.post('/addCompany',formControllers().saveCompany)





module.exports = router