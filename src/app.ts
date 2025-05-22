import express from "express";
import "dotenv/config";
import webRouters from "./routes/web";
import getConnection from "./config/database";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static files: images/css/js
app.use(express.static("public"));

//config routes
webRouters(app);

getConnection();
app.listen(PORT, () => {
  console.log(`Example app listening on port: ${PORT}`);
});
