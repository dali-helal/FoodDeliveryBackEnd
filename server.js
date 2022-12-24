require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const restaurantRoutes=require('./routes/restaurantRoutes')
const cors=require('cors')
const app=express()

app.use(cors({origin :"*"}))
app.use(express.json())
app.use('/api/restaurant',restaurantRoutes)

mongoose.connect(process.env.URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server running on port',process.env.PORT,"and connected to DataBase mongoDB")
    })
})
.catch((err)=>{
   console.log('err')
})
