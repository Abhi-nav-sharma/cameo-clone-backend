const express = require('express')
const authenticated = require('../middleware/authenticated')
const router = express.Router()

router.get('/orders/:user_id',authenticated,getOrdersOfUser);
router.patch('/orders/:user_id',authenticated,placeOrderOfUser);


module.exports=router
