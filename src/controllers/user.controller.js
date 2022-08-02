const express=require("express");
const User=require("../models/user.model.js");
const jwt=require("jsonwebtoken");
const route=express.Router();
const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
  };
route.post("/register",async(req,res)=>{
    try{
        let user;

         user = await User.findOne({ Email: req.body.Email }).lean().exec();
        if (user) {
          return res.status(200).send(false);
        }

 user= await User.create(req.body);
 const token = newToken(user);
 
return res.status(200).send({user,token})
    }catch(err){
        console.log(err.message);
    }
})

route.post("/login",async(req,res)=>{
    try{
        let user; 
 user=await User.find({"Email":req.body.Email});
if(user.length<=0){
    return res.status(200).send(false)
}

if(user[0].Passcode!=req.body.Passcode){
    return res.status(200).send(false)
}
const token = newToken(user);
 
return res.status(200).send({user:user[0],token})
    }catch(err){
        console.log(err.message);
    }
})
module.exports=route