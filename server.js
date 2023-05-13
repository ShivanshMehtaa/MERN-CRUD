const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//express app creation
const app = express()

//middleware

//just so we can see the body if there is any to a message
//using req.body in the routes
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
// app.get('/',(req,res)=>{
//     res.json({mssg:"Welcome to the App"})
// })

app.use('/api/workouts', workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for request
    app.listen(process.env.PORT, ()=>{
    console.log("connected to db and listening on ", process.env.PORT)
    })   
})
.catch((error)=>{
    console.log(error)
})

