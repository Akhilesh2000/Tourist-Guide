const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();



dotenv.config({path: './.env'});
require('./db/connection');
const User = require('./model/userSchema');

const PORT=process.env.PORT;
//const DB ='mongodb+srv://@cluster0.sszwo.mongodb.net/touristguide?retryWrites=true&w=majority';


//Middelware

const Middleware = (req, res, next) =>{
    console.log(`hello my middelware`);
    //next();
}

Middleware();

app.get('/', (req, res) =>{
    res.send(`hello from server`);
    
});

app.get('/about', (req, res) => {
   res.send(`hello about from server`);
});

app.get('/contact', (req, res) => {
    res.send(`hello contact from server`);
});

app.get('/signin', (req, res) => {
   res.send(`hello signin from server`);
});


//console.log("Hello Akhilesh");

app.listen(PORT,()=>{
    console.log(`surver running on PORT no ${PORT}`)
})



