const express= require('express')
const { getAllCelebrities, getCelebritiesByID } = require('../controllers/celebrities.controller')
const router= express.Router()

router.get('/celebs',getAllCelebrities)
router.get('/celebs/:celeb_id',getCelebritiesByID)

module.exports=router