const express = require("express");
const app = express();
const PORT = 8383;

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`);
});
