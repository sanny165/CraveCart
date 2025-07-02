const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema( //to define the rule set
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:"Number",
            required:true
        },
        image:{
            type:String, //as url string
            required:true
        },
        category:{
            type:String,
            required:true
        }
    }
)

//create model

const foodModel=mongoose.models.food || mongoose.model("Food",foodSchema) //food given so will create a collection named foods
//if already have ill chose or else create new model
module.exports=foodModel