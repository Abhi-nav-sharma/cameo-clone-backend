const express= require('express')
const { getAllCelebrities, getCelebritiesByID } = require('../controllers/celebrities.controller')
const router= express.Router()

router.get('/',getAllCelebrities)
router.get('/:celeb_id',getCelebritiesByID)

module.exports=router