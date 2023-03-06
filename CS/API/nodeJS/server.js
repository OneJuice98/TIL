const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  const j = JSON.parse(fs.readFileSync("NewJeans.json", { encoding: "utf-8" }));
  const data = {
    group: j.group,
    member: j.member,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
