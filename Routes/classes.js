const app=require('express').Router();
const Class=require('../models/Class');


app.get( '/',async(req,res)=>{
    try{
    const classes=await Class.find({}).populate('class_teacher','name experience').populate('students','name enrollment_date');
    res.render('classes',{
        classes:classes
    });
}catch(err){
res.json(err.message);
}
})


module.exports=app;