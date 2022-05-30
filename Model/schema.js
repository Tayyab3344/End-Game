const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    name:String,
    email:String,
    password:String    
});
const addblogSchema=new Schema({
    Name: String,
    
    URL: String,

    subject: String,
    
    message: String,
    
    PicImage:{
        data: Buffer,
        contentType: String 
    }   
});
const AddProfile=new Schema({
    FullName:{
        type: String
    },
    EMail:{
        type: String
    },
    Number:{
        type: String
    },
    Address:{
        type: String
    },
    ProfileImage:{
        data: Buffer,
        contentType: String 
    }   
});

const AddBlogs = mongoose.model('AddBlogs',addblogSchema)
module.exports= AddBlogs;
const addprofiles = mongoose.model('addprofiles',AddProfile)
module.exports= addprofiles;
const  MySignup=mongoose.model('MySignup',pSchema)
module.exports= MySignup;


