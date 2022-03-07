const express= require('express')
const app= express()
const cors= require('cors')
const PORT= process.env.PORT || 5000
const connect= require('./config/db')
const celebRouter= require('./routes/celebrities.routes')
const authRouter= require('./routes/auth.routes')
const passport= require('./config/passport')
app.use(
    cors({
      origin: "http://localhost:3000", 
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true
    })
  )

app.use(express.json())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/',authRouter)
app.use('/celebs',celebRouter)

const start= async ()=>{
    await connect()
    console.log('connected to mongo')
    app.listen(PORT,(req,res)=>{
        console.log('listening on port',PORT)
    })
}

module.exports= start