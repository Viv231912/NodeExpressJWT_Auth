//import modules
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require('cookie-parser');

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set("view engine", "ejs");

//database connection
const dbURI =
  "mongodb+srv://schen231912:test1234@cluster0.lmkyipj.mongodb.net/node-auth";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

//routes
//get('/') homepage rendering home view
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);


//cookies
//create cookie
app.get('/set-cookies', (req, res) => {
  //res.setHeader('Set-Cookie','newUser = true');
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true});

  res.send('you got the cookie!')
});
//read cookie
app.get('/read-cookies', (req, res) => {
  
  const cookies = req.cookies;
  console.log(cookies.newUser);

  res.json(cookies);
});