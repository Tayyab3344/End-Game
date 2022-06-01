if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const passport = require('passport')
const bcrypt = require('bcrypt')
const mongoose=require('mongoose')
const flash = require('express-flash')
const session = require('express-session')
const blogs = require('./Model/AddblogSchema')

//const multer = require('multer')


// New
require('./passport-config')(passport);

app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use("/views",express.static(__dirname + "/views"))
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport, 
  email => users.mysignup(user => user.email === email),
  id => users.mysignup(user => user.id === id))

  // const InitializePassport = require('./passport-config')
  // InitializePassport(
  //   passport, 

  //   EMail => users.addprofiles(user => user.E<ail === EMail),
  //   EMail => users.addprofiles(user => user.Email === EMail),
  //   FullName=> users.addprofiles(user => user.FullName === FullName),
  //   Address=> users.addprofiles(user => user.Address === Address),
  //   Number=> users.addprofiles(user => user.Number === Number),
  //   ProfileImage=> users.addprofiles(user => user.ProfileImage === ProfileImage));

const users=[]

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: false  }))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// -- DataBase Work
const url='mongodb+srv://TechBloggers:techbloggers123@cluster0.i1ic8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//const addprofiles=require("C:/Users/ILYAS/Desktop/Web-Project/End-Game/Model/schema.js")  
const AddBlogs= require("C:/Users/ILYAS/Desktop/Web-Project/End-Game/Model/schema.js")
const MySignup=require("C:/Users/ILYAS/Desktop/Web-Project/End-Game/Model/schema.js")  

// const addprofiles=require("D:/WebEngineeringProject/End-Game-1/Model/schema.js")  
 const mysignup=require("D:/WebEngineeringProject/End-Game-1/Model/schema.js")
const AddBlogs=require("D:/WebEngineeringProject/End-Game-1/Model/AddblogSchema")
const PRofile=require("D:/WebEngineeringProject/End-Game-1/Model/ProfileSchema")
mongoose.connect(url)
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err))

// -- End --

//------------ Global variables ------------//
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//------------ Importing Controllers ------------//
const controller = require('D:/WebEngineeringProject/End-Game-1/Controller/controller')

//const controller = require('D:/WebEngineeringProject/End-Game-1/Controller/controller.js')
app.get('/', checkAuthenticated, (req,res)=>{
  res.render('MainScreen')
})
app.get('/Login', (req,res)=>{
  res.render('login')
})

app.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
 });

   app.get('/Mainscreen',checkNotAuthenticated,(req,res)=>{
    res.render('MainScreen');
 });
app.post('/Mainscreen', async (req,res)=>{
  try{
  let addBlogs = new AddBlogs({
  blog_name: req.body.blog_name,
  blog_url: req.body.blog_url,
  blog_email: req.body.blog_email,
  blog_subject: req.body.blog_subject,
  blog_message: req.body.blog_message,
  blog_image: req.body.blog_image
  });
  console.log(addBlogs);
addBlogs.save()
.then((result)=>{res.send(result)})
.catch((err)=>{
  console.log(err)
});
// -- End 
res.redirect('/Mainscreen')
}catch{
res.redirect('/Blogs')
}})

app.get('/Blogs',(req,res)=>{
    res.render('blogs');
});
app.post('/Blogs',checkNotAuthenticated,(req,res)=>{
  res.render('blogs');
});

app.get('/profile',checkAuthenticated,(req,res)=>{
  res.render('profile');
});
app.post('/profile',async(req,res)=>{
  try{
    let pro = new PRofile({
    profile_name: req.body.profile_name,
    profile_email: req.body.profile_email,
    profile_contact: req.body.profile_contact,
    profile_address: req.body.profile_address,
    });
  console.log(pro);
  pro.save()
  .then((result)=>{res.send(result)})
  .catch((err)=>{
    console.log(err)
  });
  // -- End 
  res.redirect('/Mainscreen')
  }catch{
  res.redirect('/Blogs')
  }
  
});
app.get('/display',async(req,res)=>{
  blogs.find(function(err, addblogs) {
    if (err) {
      console.log(err);
      }
      else{
        res.status(200).render('Display')
        console.log(addblogs)
      }
    
   // res.status(200).render('Display') 
    //res.send(students);
  })
});
app.post('/display',checkNotAuthenticated,(req,res)=>{
    res.render('Display');
});
app.get('/register',checkNotAuthenticated,(req,res)=>{
  res.render('register.ejs')
})
app.post('/register',checkNotAuthenticated,async (req,res)=>{
try{
  const hashedPassword = await bcrypt.hash(req.body.password,10)
 
  // -- DataBase 
  const mysignup=new MySignup({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
     });
     mysignup.save()
     .then((result)=>{res.send(result)})
     .catch((err)=>{
       console.log(err)
     });
     // -- End 
  res.redirect('/login')
}catch{
  res.redirect('/register')
}
 
})

app.delete('/logout',(req,res)=>{
  req.logOut()
  res.redirect('/login')
})

app.post('/',checkNotAuthenticated,async (req,res)=>{try{
  const addblogs = new  AddBlogs({
      Name: req.body.Name,
      URL: req.body.URL,
      subject: req.body.subject,
      message: req.body.message,
     
     });
     addblogs.save()
     .then((result)=>{res.send(result)})
     .catch((err)=>{
       console.log(err)
       console.log("data not saved")
     })
     res.redirect('/')
     console.log("DONE")
    }catch{
      res.redirect('/')
      console.log("TRY NOT WORK")
    }
      
})

//------------ Forgot Password Route ------------//
app.get('/forgot', (req, res) => res.render('forgot.ejs'));

//------------ Forgot Password Handle ------------//
app.post('/forgot', controller.forgotPassword);

//------------ Reset Password Handle ------------//
app.get('/forgot/:token', controller.gotoReset);

//------------ Reset Password Route ------------//
app.get('/reset/:id', (req, res) => {
  res.render('reset.ejs', { id: req.params.id })
});

//------------ Reset Password Handle ------------//
app.post('/reset/:id', controller.resetPassword);


function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return next()
  }   
  res.redirect('/login')
}
function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return res.redirect('/')
    }
    next()
 }
// var Storage = multer.diskStorage({
//   destination:"./views",
//   filename:(req,file,cb)=>{
//     cb(null,file,fieldname)
//   }
// })
// var upload = multer({
//   storage:Storage
// }).single('blog_image');
app.listen(3000)