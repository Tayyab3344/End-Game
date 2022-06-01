const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    name:String,
    email:String,
    password:String     
});

const  MySignup=mongoose.model('MySignup',pSchema)
module.exports= MySignup;


