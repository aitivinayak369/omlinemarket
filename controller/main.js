var router = require('express').Router();
 const passport = require('passport');

 require('../config/passportsetup');

router.get('/',(req,res)=>{

res.render('main/home');

})

router.get('/login',(req,res)=>{

    res.render('main/login');
})


router.get('/signup',(req,res)=>{
    res.render('main/signup');
});
router.get('/auth/google',passport.authenticate('google',{scope:['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}))

router.get('/auth/facebook',passport.authenticate('facebook',{scope:['email','public_profile']}));
router.get('/auth/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/'}))

router.get('/forgotpassword',(req,res)=>{
    res.render('main/forgotpassword',{layout:'layout1'});
})
module.exports= router;

