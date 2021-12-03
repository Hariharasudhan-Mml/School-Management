const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});


const model=mongoose.model('Teacher',teacherSchema);

module.exports=model;
