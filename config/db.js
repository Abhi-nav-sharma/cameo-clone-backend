const mongoose= require('mongoose')
const connect= ()=>{
    return mongoose.connect("mongodb+srv://abhinav:pdtLm3l1YtCf8mn7@cluster0.tic83.mongodb.net/cameo?retryWrites=true&w=majority")
}

module.exports=connect