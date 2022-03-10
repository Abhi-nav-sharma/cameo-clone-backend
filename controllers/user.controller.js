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

const getFollowing= async(req,res)=>{
    try{
        const user= await User.find({email:req.user.email})
        if(!user){
            return res.status(400).json({msg:'User not found'})
        }
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

const removeFollowingInUser= async(req,res)=>{
    try{
        const user= await User.findOneAndUpdate({
            email:req.user.email
        },{
            $pull:{
                following:req.body.celeb_id
            }
        },{
            returnOriginal:false
        })
        if(!user){
            return res.status(400).json({msg:'User not found'})
        }
        return res.status(200).send('Removed celebrity from following')
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

const addFollowingInUser= async(req,res)=>{
    try{
        const user= await User.findOneAndUpdate({
            email:req.user.email
        },{
            $addToSet:{
                following:req.body.celeb_id
            }
        },{
            returnOriginal:false
        })
        if(!user){
            return res.status(400).json({msg:'User not found'})
        }
        return res.status(200).send('Added celebrity to following')
    }
    catch(err){
        return res.status(500).send(err.toString())
    }
}

module.exports={getUserByEmail,addFollowingInUser,getFollowing,removeFollowingInUser}