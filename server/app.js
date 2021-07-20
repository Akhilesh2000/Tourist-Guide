const dotenv = require('dotenv');
const express = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './.env'});
const DB =process.env.DATABASE;
const PORT=process.env.PORT;
//const DB ='mongodb+srv://AkhileshSahu2022:6261022101@cluster0.sszwo.mongodb.net/touristguide?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    usezfindModify:false
}).then(() =>{
    console.log('connection successful');

}).catch((err) => console.log('no connection'));

// Middelware

const Middelware = (req, res, next) =>{
    console.log('hello my middelware');

}

Middelware();

app.get('/' ,(req, res) =>{
    console.log('hello from server');
});

app.get('/about' ,Middelware,(req, res) =>{
    console.log('hello about from server');
});

app.get('/contact' ,Middelware,(req, res) =>{
    console.log('hello contact from server');
});

app.get('/signin' ,Middelware,(req, res) =>{
    console.log('hello signin from server');
});


//console.log("Hello Akhilesh");

app.listen(PORT, () =>{
    console.log(`Server is running at port no ${PORT}`);
})


