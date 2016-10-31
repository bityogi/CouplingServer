const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/coupons', function(req, res) {
  const contents = fs.readFileSync('./misc/data/coupons.json');
  const jsonContents = JSON.parse(contents)
  res.json(jsonContents.coupons);
});

app.listen(9090, function () {
  console.log('Coupling Server listening on port 9090!');
});
