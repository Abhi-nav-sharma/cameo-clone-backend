const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type: String, required:true, unique:true},
    password:{type: String},
    bio:{type:String},
    username:{type:String},
    name:{type:String},
    twitter_handle:{type:String},
    profile_picture:{type:String},
    following:{type:Array},
    orders:{
        purchased:{type:Array},
        received:{type:Array}
    }
 },{timestamps:true})


const User = mongoose.model("users", userSchema);

module.exports = User;