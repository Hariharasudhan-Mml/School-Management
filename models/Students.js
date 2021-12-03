const mongoose=require('mongoose');


const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    enrollment_date:{
        type:Date,
        required:true
    },
    class_id:{
        type:mongoose.Types.ObjectId,
        ref:'Class',
        required:true
    },
    teacher_id:{
        type:mongoose.Types.ObjectId,
        ref:'Teacher',
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
required:true
    }

})



const model=mongoose.model('Student',studentSchema);


module.exports=model;