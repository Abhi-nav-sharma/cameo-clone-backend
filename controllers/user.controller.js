const User = require("../models/users.model")

const getUserByEmail = async (req,res)=>{
    try{
        const [user]= await User.find({email:req.params.email})
        if(!user){
            return res.status(400).send('No record found')
        }
        res.status(200).json(user)
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

module.exports={getUserByEmail}