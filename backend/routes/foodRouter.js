const express=require('express')
const foodRouter=express.Router();
const {addFood,listFood,removeFood}=require('../controllers/foodController')
const multer=require('multer') //used to store imgs as mongodb cant there are other better techniques for this

//image storage engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) //appending date to filename to avoid duplicate names
    }
})
const upload=multer({storage})

foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.delete('/remove',removeFood)

module.exports=foodRouter