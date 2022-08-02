const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Mobile:{type:String,required:true},
    Passcode:{type:String,required:true},
    Role:{type:String,required:true},
});

module.exports= mongoose.model("user",userSchema);