const express= require('express')
const { addFollowingInUser, getFollowing, removeFollowingInUser } = require('../controllers/user.controller')
const authenticated = require('../middleware/authenticated')
const router= express.Router()

router.get('/user/profile',authenticated,(req,res)=>{
    return res.status(200).json({profile_picture:req.user.profile_picture,username:req.user.username})
})

router.patch('/user/following',authenticated,addFollowingInUser)

router.get('/user/following',authenticated,getFollowing)

router.patch('/user/following/remove',authenticated,removeFollowingInUser)

module.exports=router