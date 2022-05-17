const express = require('express');
const router=express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');

const user=require('/Model/schema');
const res = require('express/lib/response');


router.get('/',checkAuthenticated,(req,res)=>
res.render('login'));

router.get('/login',checkNotAuthenticated,(req,res)=>
res.render('login'));

router.get('/register',checkNotAuthenticated,(req,res)=>
res.render('register'));

router.get('/blogs',checkNotAuthenticated,(req,res)=>
res.render('blogs'));



