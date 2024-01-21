const express = require('express')
const cors=require('cors')
const app=express()
require('./configue/connect')
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/movieRoutes'))






app.listen(8081, (err)=>{
    err?  console.log(err)   : console.log("server is running in port : " );    
})

