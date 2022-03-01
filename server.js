const express= require('express')
const app= express()
const cors= require('cors')
const PORT= process.env.PORT || 5000
const connect= require('./config/db')

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello world')
})

const start= async ()=>{
    await connect()
    console.log('connected to mongo')
    app.listen(PORT,(req,res)=>{
        console.log('listening on port',PORT)
    })
}

module.exports= start