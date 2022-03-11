const express = require('express')
const authenticated = require('../middleware/authenticated')
const router = express.Router()

router.get('/orders/:username',authenticated,getOrdersOfUser);
router.patch('/orders/:username',authenticated,placeOrderOfUser);


module.exports=router
