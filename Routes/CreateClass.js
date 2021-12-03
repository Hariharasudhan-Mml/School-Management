const app = require("express").Router();
const Class = require("../models/Class");

app.get("/", (req, res) => {
  try {
    res.render("createClass");
  } catch (err) {
    res.json(err.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    console.log(newClass);
    res.render('success',{
      type:'Class'
    });
  } catch (err) {
    
    res.json({"message":err});
  }
});

module.exports = app;
