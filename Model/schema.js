const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    name:String,
    email:String,
    password:String     
});
const addblogSchema=new Schema({
    blog_name: String,
    blog_URL: String,
    blog_subject: String,
    blog_message: String
});
module.exports= mongoose.model('AddBlogs',addblogSchema)
const  MySignup=mongoose.model('MySignup',pSchema)
module.exports= MySignup;


