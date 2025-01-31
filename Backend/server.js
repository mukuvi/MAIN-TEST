const express = require("express");
const app = express();
const PORT = 8383;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
