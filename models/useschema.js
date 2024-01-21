const mongoose = require('mongoose');

const movesschema= mongoose.Schema( 
{
    title : {type :String, required:true},
    rate : Number,
    description : {type :String, required:true},
    posturi:String
   
})

const Movie=mongoose.model('movie',movesschema)


module.exports=Movie;