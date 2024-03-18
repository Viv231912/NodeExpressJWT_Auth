//import modules
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();

//middleware
app.use(express.static("public"));
app.use(express.json());


//view engine
app.set("view engine", "ejs");

//database connection
const dbURI = "mongodb+srv://schen231912:test1234@cluster0.lmkyipj.mongodb.net/node-auth";
mongoose.connect(dbURI)
.then(result => app.listen(3000))
.catch(error => console.log(error));

//routes
//get('/') homepage rendering home view
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);