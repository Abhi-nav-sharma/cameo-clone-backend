const express= require('express')
const app= express()
const cors= require('cors')
const PORT= process.env.PORT || 5000
const connect= require('./config/db')
const Celebrity = require('./models/celebrities.model')

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    const celebrities= Celebrity.find()
    res.status(200).json(celebrities)
})

const start= async ()=>{
    await connect()
    console.log('connected to mongo')
    app.listen(PORT,(req,res)=>{
        console.log('listening on port',PORT)
    })
}

module.exports= start