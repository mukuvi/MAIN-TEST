import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;
//Get the file path from the URL of the current module
const __filename = fileURLToPath();
app.get("/", (req, res) => {
  res.sendFile(path);
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
