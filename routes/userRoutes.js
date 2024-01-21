const express=require('express')
const router=express.Router()
const {createMovie,geteone, geteMovie ,updateMovie , deleteMovie } = require('../controllers/Moviecontroller')


router.post('/create',createMovie)
router.get('/getall',geteMovie)
router.get('/get/:a',geteone)
router.put('/update/:a',updateMovie)
router.delete('/delete/:a',deleteMovie)

module.exports=router;


