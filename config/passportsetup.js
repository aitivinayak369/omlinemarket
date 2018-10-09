const mongoose = require('mongoose');
//const sec
const s= require("../secrets/secretkeys")
//const User;

const passport          = require('passport');

const localStrategy     = require('passport-local').Strategy;

const facebookStrategy  = require('passport-facebook').Strategy;

const googleStrategy     =  require('passport-google-oauth').OAuth2Strategy;

//local strategy setup
passport.use('Local',new localStrategy(
   
    {
        //options
        usernameField:'email',
        passwordField:'password',
          
    } ,function(email,password,done){

         //verification

    }));

//facebook strategy setup

 passport.use('facebook',new facebookStrategy(
  {
    clientID:s.fbKey,
    clientSecret:s.fbId,
    callbackURL:'/auth/facebook/callback',
    profileFields:['id','displayName','photos','email'] ,
    passReqToCallback:true,

  }, function(req,accessToken,refreshToken,profile,done){

      // verification
      done(null,false);
      console.log(profile);

  }
))

//google strategy setup

 passport.use('google',new googleStrategy(
    {
      clientID:s.googleKey,
      clientSecret:s.googleId,
      callbackURL:'/auth/google/callback',
     passReqToCallback:true,


     }, function(req,accessToken,refreshToken, profile, done){
         console.log(profile);
         done(null ,false);

         //verification
      }
  ))
  


