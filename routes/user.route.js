const express= require('express')
const authenticated = require('../middleware/authenticated')
const router= express.Router()

router.get('/user/profile',authenticated,(req,res)=>{
    return res.status(200).json({profile_picture:req.user.profile_picture,username:req.user.username})
})

module.exports=router