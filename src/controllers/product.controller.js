const express=require("express");
const Product=require("../models/product.model.js");
const auth=require("../middleware/authorization")
const route=express.Router();

route.post("/addproduct",auth,async(req,res)=>{
    console.log(req.user)
    try{

if(req.user[0].Role!="admin"){
    return res.status(200).send("Acess Denined")
}

        let product= await Product.create(req.body);
       
return res.status(200).send("product added sucessfully")
    }catch(err){
        console.log(err.message);
    }
})

route.get("/product",auth,async(req,res)=>{
    console.log(req.user)
    try{

if(req.user.Role=="staff"){
    return res.status(400).send("Acess Denined");
};
 let product= await Product.find().lean().exec();
       
return res.status(200).send(product)
    }catch(err){
        console.log(err.message);
    }
})

module.exports=route