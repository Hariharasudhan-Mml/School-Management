const app = require("express").Router();
const Student = require("../models/Students");
const Teacher = require("../models/Teachers");
const Class = require("../models/Class");

app.get("/", async (req, res) => {
try {
  const teachers=await Teacher.find({});
  const classes=await Class.find({});
  console.log(classes)
  res.render("CreateStudent",{
    classes:classes,
    teachers:teachers
  });
  
} catch (error) {
  res.json(error.message)
}
  
});

app.post("/", async (req, res) => {
  try{
  const student = await Student.create(req.body);
  const teacher = await Teacher.findById(req.body.teacher_id);
  const newclass = await Class.findByIdAndUpdate(
    req.body.class_id,
    { $push: {students: student._id }, class_teacher: teacher._id },
    { new: true }
  );
  console.log(student,newclass);
  res.render('success',{type:'Student'});
  }
  catch(err){
    res.json(err.message)
  }
});

module.exports = app;
