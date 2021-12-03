const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const connectDB=require('./config/db');
const createclass=require('./Routes/CreateClass');
const createteacher=require('./Routes/CreateTeacher');
const createstudent=require('./Routes/createStudent');
const classes=require('./Routes/classes');
const students=require('./Routes/students')
const port=process.env.PORT || 5500;


const app=express();
app.set('view engine','ejs');
app.use('/public',express.static('public'));

connectDB();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/createclass',createclass);
app.use('/createteacher',createteacher);
app.use('/createstudent',createstudent);
app.use('/classes',classes);
app.use('/students',students);



app.get('/',(req,res)=>{
    res.render('home');
});


app.listen(port,(err)=>{
    if(err)console.log(err);
    console.log('Server is up and Running');

})