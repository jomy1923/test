const express = require('express')
const router = express.Router()

router.get('/get',(req,res)=>{ 
    res.render('user/registration') 
})






module.exports = router