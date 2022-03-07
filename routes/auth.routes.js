const express= require('express')
const router= express.Router()
const passport= require('../config/passport');
const { generateToken } = require('../controllers/auth.controlller');
const cookiePArser= require('cookie-parser')
router.get('/auth/facebook',
  passport.authenticate('facebook',{ scope : ['email'] }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    const token= generateToken(req.user)
    res.cookie('token',token)
    res.redirect('http://localhost:3000')
  });

  module.exports=router