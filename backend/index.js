const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server's running at port ${PORT}`);
});
