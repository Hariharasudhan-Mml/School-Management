const mongoose=require('mongoose');



const  classSchema=mongoose.Schema({

students:[
    {
    type:mongoose.Types.ObjectId,
    ref:'Student',
    default:null
}
],
class_teacher:
    {
        type:mongoose.Types.ObjectId,
        ref:'Teacher',
        default:null
    },
class_name:{
    type:String,
    required:true
}
})


const model=mongoose.model('Class',classSchema);


module.exports=model;