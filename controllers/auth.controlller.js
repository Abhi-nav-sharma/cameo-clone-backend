const { validationResult } = require('express-validator')
const jwt= require('jsonwebtoken')
const User = require('../models/users.model')
require('dotenv').config()

const generateToken= (user)=>{
    //synchronous in nature
    return jwt.sign({
        id:user._id,
        email: user.email
    },process.env.SECRET_KEY
    )
}

const signin= async (req,res)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let user
    try{
        user= await User.findOne({email:req.body.email}).exec()

        if(!user){
            return res.status(401).json({status:'failure', message:'Invalid email or password'})
        }
    }
    catch(err){
        return res.status(500).json({status:'failure', message:err.toString()})
    }
    let match
    try{
       match= await user.checkPassword(req.body.password)
            if(!match){
                return res.status(401).json({status:'failure', message:'Invalid email or password'})
            }
    }
    catch(err){
        return res.status(500).json({status:'failure', message:err.toString()})
    }
    const token= generateToken(user)
    return res.status(200).json({status:'Success',data:{
        id:user.user_id,
        email:user.email,
        token
    }})
}

module.exports={generateToken,signin}