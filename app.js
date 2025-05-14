const express = require("express");
const app = express();
const port = 5000;
app.get("/", () => {
  return "Hello World";
});

app.listen(5000, () => {
  console.log(`Example app listening on port ${port}`);
});
