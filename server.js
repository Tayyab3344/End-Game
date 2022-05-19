if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const passport = require('passport')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')


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

  const InitializePassport = require('./passport-config')
  InitializePassport(
    passport, 
    EMail => users.addprofiles(user => user.E<ail === EMail),
    FullName=> users.addprofiles(user => user.FullName === FullName),
    Address=> users.addprofiles(user => user.Address === Address),
    Number=> users.addprofiles(user => user.Number === Number),
    ProfileImage=> users.addprofiles(user => user.ProfileImage === ProfileImage));

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
const mongoose=require('mongoose');
const url='mongodb+srv://TechBloggers:techbloggers123@cluster0.i1ic8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const addprofiles=require("C:/Users/Ocean Computers/Desktop/WEB Engineering/End-Game/Model/schema.js")  

const mysignup=require("C:/Users/Ocean Computers/Desktop/WEB Engineering/End-Game/Model/schema.js")  
mongoose.connect(url)
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err))

// -- End --

app.get('/', checkAuthenticated, (req,res)=>{
  res.render('MainScreen.ejs')
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


//
app.get('/MainScreen',checkNotAuthenticated,(req,res)=>{
  res.render('MainScreen.ejs');
});
app.post('/Dashboard',checkNotAuthenticated,async (req,res)=>{
  const AddBlogs = new AddBlogs({
      Name: req.body.Name,
      URL: req.body.URL,
      subject: req.body.subject,
      message: req.body.message,
      PicImage: req.body.PicImage,
     });
     AddBlogs.save()
     .then((result)=>{res.send(result)})
     .catch((err)=>{
       console.log(err)
     });
})

app.get('/Blogs',checkAuthenticated,(req,res)=>{
  res.render('blogs');
});

app.post('/Blogs',checkNotAuthenticated,(req,res)=>{
  res.render('blogs');
});

app.get('/profile',checkAuthenticated,(req,res)=>{
  res.render('profile');
});

app.post('/profile',checkNotAuthenticated,(req,res)=>{
  const addprofile = new AddProfile({
    Name: req.body.Name,
    EMail: req.body.EMail,
    Number: req.body.Number,
    Address: req.body.Address,
    ProfileImage: req.body.ProfileImage
  });
addprofile.save();
  res.render('profile');
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
  console.log(users)
})

app.delete('/logout',(req,res)=>{
  req.logOut()
  res.redirect('/login')
})
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
app.listen(3000)