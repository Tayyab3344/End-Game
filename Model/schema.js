const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    name:String,
    email:String,
<<<<<<< HEAD
    password:String    
});
const addblogSchema=new Schema({
    Name: String,
    
    URL: String,

    subject: String,
    
    message: String,
    
    // PicImage:{
    //     data: Buffer,
    //     contentType: String 
    // }   
=======
    password:String     
>>>>>>> 371a7f988c2046d96bc1630c143375fe06f3dcae
});
// const AddProfile=new Schema({
//     Name:{
//         type: String
//     },
//     EMail:{
//         type: String
//     },
//     Number:{
//         type: String
//     },
//     Address:{
//         type: String
//     },
//     ProfileImage:{
//         data: Buffer,
//         contentType: String 
//     }   
// });

<<<<<<< HEAD
 const AddBlogs = mongoose.model('AddBlogs',addblogSchema)
 module.exports= AddBlogs;
// const Addprofile = mongoose.model('Addprofile',AddProfile)
// module.exports= Addprofile;
=======
>>>>>>> 371a7f988c2046d96bc1630c143375fe06f3dcae
const  MySignup=mongoose.model('MySignup',pSchema)
module.exports= MySignup;


