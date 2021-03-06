'use strict';
const https        = require('https');
const express      = require('express');
const exphbs       = require('express-handlebars');
const bodyParser   = require('body-parser');
const cookieParser =require('cookie-parser');
const session      =require('express-session');
const path         = require('path');
const mongoose     = require('mongoose');
const passport     = require('passport');
const MongoStore   = require('connect-mongo')(session);
var   secretFile         = require('./secrets/secretkeys');
var fs  = require('fs')
//primitivevaues
var port =process.env.PORT||5000;
var app = express();
// static files link



app.use(express.static(path.join(__dirname,'./public')))

 /* var options ={
    key:fs.readFileSync('./server.key'),
   cert:fs.readFileSync('./server.crt'),
    passphrase:'vinayak',
    requestcert:false,
   rejectUnauthorized:false

 } */

 /* var server = https.createServer(options,app).listen(port,"0.0.0.0",()=>{
    console.log('listening at port:',port);
 }) */
//session connect-mongo

app.use(session({secret:secretFile.secret,saveUninitialized:true,resave:true,store:new MongoStore({url:'mongodb://vinayak:vinayak123@ds052978.mlab.com:52978/ecommerce'})}));


app.engine('hbs',exphbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','hbs');
var mainRouter = require('./controller/main');

app.use('/',mainRouter);


  app.listen(port,(err)=>{
     if(err)
    {
      
        console.log("Error occured in binding port:"+err);
    }
    else{
        console.log('Listening on port: '+ port);
    }
}) 