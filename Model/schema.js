const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    fname:String,
    email:String,
    password:String    
});
const addblogSchema=new Schema({
    Name:{
        type: String
    },
    URL:{
        type: String
    },
    subject:{
        type: String
    },
    message:{
        type: String
    },
    PicImage:{
        data: Buffer,
        contentType: String 
    }   
});
const AddBlogs = mongoose.model('AddBlogs',addblogSchema)
module.exports= AddBlogs;
const  MySignup=mongoose.model('MySignup',pSchema)
module.exports= MySignup;


