const express = require("express");
const app = express();

const http = require("http");

const config = require("config.json");

const { exec } = require("child_process")

app.use("/", (req, res) => {
  const r = req.query;
  if(!r) return;
  if(r.key && r.old && r.passwd && r.user) {
    fs.writeFileSync(
`${r.old}
echo "${r.new}\n${r.new}" | passwd ${r.user}
`
    )
    fs.writeFileSync("run.tmp", "cat command | sudo bash")
    if(r.key == config.key)
      exec("bash run.tmp")
  }
});

http.request("http://passwd_server.glitch.me?a=register&tag=" + config.tag)

console.log("Started")
