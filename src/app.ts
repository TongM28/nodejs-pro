import express from "express";
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('view', __dirname + './views/');
console.log(__dirname + './views/')

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/acb", (req, res) => {
  res.send("hello cbd"); 
});

app.get("/abc", (req, res) => {
  res.send("hello abc");
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname + './views/')
});
