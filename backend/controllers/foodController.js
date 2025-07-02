const foodModel=require('../models/foodModel')
const fs=require('fs')
const path=require('path')
const fspromises=require('fs').promises

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
        res.status(201).json({"message":"food added successfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({"message":error.message})
        
    }

}
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({})
        res.json({data:foods})
    }
    catch(error){
        console.log(error);
        res.status(500).json({"message":error.message})
    }
}

const removeFood=async(req,res)=>{
    try{
        const{id}=req.query
        console.log(id);
        const food=await foodModel.findById(id)
        if(!food)
            return res.status(404).json({"message":"Food not found"})
        await fspromises.unlink(path.join(__dirname,'..','uploads',`${food.image}`))
        await foodModel.deleteOne({_id:id})
        res.status(200).json({"message":"food deleted successfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({"message":error.message})
    }
}
module.exports={addFood,listFood,removeFood}