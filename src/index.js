const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT||5555;
const UserController=require("../src/controllers/user.controller.js");
const ProductController=require("../src/controllers/product.controller.js")
const connect=require("./db.js")




app.use("",UserController)
app.use("",ProductController)
app.listen(PORT,async function(){
    try{
        await connect();
console.log("yes")
    }catch(err){
console.log(err.message)
    }
})