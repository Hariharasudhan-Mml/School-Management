const app = require("express").Router();
const Student = require("../models/Students");

app.get("/", async (req, res) => {
  try {
    const students = await Student.find({})
      .populate("class_id", "class_name")
      .populate("teacher_id", "name contact");
    res.render("students", {
      students: students,
    });
  } catch (err) {
    res.send(err.message);
  }
});


module.exports=app;