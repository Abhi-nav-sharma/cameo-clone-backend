const express= require('express')
const router= express.Router()
const passport= require('../config/passport');
const { generateToken, signin } = require('../controllers/auth.controlller');
const url = require('url');
const validateSignin = require('../utils/validateSignin');

router.post('/signin',...validateSignin(),signin)

router.get('/auth/facebook',
  passport.authenticate('facebook',{ scope : ['email'] }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    const token= generateToken(req.user)
    // res.cookie('token',token)
    res.redirect(url.format({
        pathname:'http://localhost:3000/',
        query:{
            "token":token,
            "user":req.user.email
        }
    }))
  });

  module.exports=router