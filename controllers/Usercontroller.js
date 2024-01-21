const Movie=require('../models/movesschima')

const createMovie=async(req,res)=>{
    try {
        const newmovie=await Movie.create(req.body)
        res.status(201).json({msg:'Movie created' , newmovie})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong', error})
    }
}

const geteMovie=async(req,res)=>{
    try {
        const getmovie=await Movie.find()
        res.status(201).json({msg:'ALL Movie ' , getmovie})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong', error})
    }
}

const geteone=async(req,res)=>{
    try {
        const getmovie=await Movie.findById({_id:req.params.a})
        res.status(201).json({msg:'ALL Movie ' , getmovie})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong', error})
    }
}

const updateMovie=async(req,res)=>{
    try {
        const updatemovie=await Movie.findByIdAndUpdate({_id:req.params.a} , req.body , {new:true} )
        res.status(201).json({msg:'Movie updated' , updatemovie})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong', error})
    }
}


const deleteMovie=async(req,res)=>{
    try {
        const deletemovie=await Movie.findByIdAndDelete({_id:req.params.a}  )
        res.status(201).json({msg:'Movie deleted' , deletemovie})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong', error})
    }
}


module.exports={createMovie ,geteone, geteMovie , updateMovie , deleteMovie}