const Orders = require("../models/order.model")

const placeOrderOfUser = async (req,res) => {
    try{
        const detailsOfOrder = await Orders.updateOne({username:req.params.username},{})
        if(!detailsOfOrder){
            return res.status(400).send('No record found')
        }
        res.status(200).json(detailsOfOrder)
    }   
    catch{
        return res.status(500).send(err.toString())
    }
}

const getOrdersOfUser = async (req,res)=>{
    try{
        const allOrdersOfUser = await Orders.find({username:req.params.username})
        if(!allOrdersOfUser){
            return res.status(400).send('No record found')
        }
        res.status(200).json(allOrdersOfUser)
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}


module.exports={
    getOrdersOfUser,
    placeOrderOfUser
}