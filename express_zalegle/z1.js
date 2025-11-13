const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require("fs");


app.get('/:rodzaj', (req, res) => {
  const rodzaj = req.params.rodzaj;
  fs.readFile("jedzenie.json", "utf8", (err, data) =>{
    const jedzenie = JSON.parse(data);
    res.json({ jedzenie: jedzenie[rodzaj]});
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});