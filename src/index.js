const express = require("express");

const app = express();
app.use(express.json());

app.post("/ussd", (req, res) => {
  res.send("CON Welcome to USSD Banking Demo");
});

app.listen(3000, () => {
  console.log("USSD server running on port 3000");
});
