const express = require("express");
const app = express();

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
  }
});
