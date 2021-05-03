const express = require('express')
const router = express.Router()
const formControllers = require('../controllers/formControllers')


router.get('/',(req,res)=>{
    res.render('user/home')
})
router.get('/addCompany',formControllers().init)
router.post('/addCompany',formControllers().saveCompany)
router.get('/addAppointment',formControllers().addAppointment)
router.post('/addAppointment',formControllers().saveAppointment)





module.exports = router