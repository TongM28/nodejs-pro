const express = require("express");
const app = express();
const port = 8080;
app.get("/", () => {
  return "Hello World";
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${port}`);
});
