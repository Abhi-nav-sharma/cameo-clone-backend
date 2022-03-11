const mongoose= require('mongoose')

const orderSchema = new mangoose.Schema({
    fore:{type:String,required:true},
    from:{type:String,required:true},
    occassion:{type:String,required:true},
    instructions:{type:String,required:true},
    optional:{type:String,required:false},
    price:{type:Number,required:true},
    celeb_id:{type:String,required:true},
    username:{type:String,required:true},
})

const Orders = mongoose.model('orders',orderSchema)

module.exports= Orders
