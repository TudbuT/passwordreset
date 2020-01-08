const express = require("express");
const app = express();

app.use("/", (req, res) => {
  const r = req.query;
  if(!r) return;
  if(r.key && r.passwd) {
    fs.writeFile("run.tmp", "cat command | sudo bash")
  }
});
