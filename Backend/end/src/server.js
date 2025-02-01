import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;
//Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);
//Get the directory name from the file path
const __dirname = dirname(__filename);

//Serves the HTML file from the /public directory
//Tells express to serve all the files from the public folder as static assets /file.  Any request for CSS files will be resolved to the public directory
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

//Serving up the HTML file from  the /public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
