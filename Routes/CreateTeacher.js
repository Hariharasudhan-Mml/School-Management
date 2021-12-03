const app = require("express").Router();
const Teacher = require("../models/Teachers");

app.get("/", (req, res) => {
  try {
    res.render("CreateTeacher");
  } catch (error) {
    res.json(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    console.log(teacher);
    res.render("success", {
      type: "Teacher",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = app;
