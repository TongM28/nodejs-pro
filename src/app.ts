// const express = require("express");
import express from "express";

const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello World nodemon");
});

app.get("/tongminhtest", (req, res) => {
  res.send("hello minh");
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${port}`);
});
