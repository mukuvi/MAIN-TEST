const express = require("express");
const app = express();
const PORT = 8383;
let data = ["james"];

//middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<body><h1>DATA</h1><p>${JSON.stringify(data)}</p> </body>`);
});
// CRUD-method      Create-post    Read-get Update-put      Delete-delete

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
