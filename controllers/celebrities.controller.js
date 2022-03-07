const Celebrity = require("../models/celebrities.model")

const getAllCelebrities=async (req,res)=>{
    try{
        const celebrities= await Celebrity.find()
        if(!celebrities){
            return res.status(400).send('No data found')
        }
        res.status(200).json(celebrities)
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

const getCelebritiesByID= async(req,res)=>{
    try{
        const [celebrity]= await Celebrity.find({celeb_id:req.params.celeb_id})
        if(!celebrity){
            return res.status(400).send('No record found')
        }
        res.status(200).json(celebrity)
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

module.exports={
    getAllCelebrities,getCelebritiesByID
}