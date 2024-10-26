const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("helloo world");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
