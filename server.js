const express = require('express')
const res = require('express/lib/response')
const app = express()
const bcrypt = require('bcrypt')
const initializePassport = require('./passport-config')
initializePassport(Passport)
const users=[]

app.set('view-engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/Login',(req,res)=>{
    res.render('login.ejs')
})
app.post('/login',(req,res)=>{

})
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.post('/register',(req,res)=>{
try{
    const hashedPassword =  bcrypt.hash(req.body.password,10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })
    res.redirect('/login')
}catch{
    res.redirect('/register')
}
    console.log(users)
})
app.listen(3000)