const jwt= require('jsonwebtoken')
require('dotenv').config()

const generateToken= (user)=>{
    //synchronous in nature
    return jwt.sign({
        id:user._id,
        email: user.email
    },process.env.SECRET_KEY
    )
}

module.exports={generateToken}