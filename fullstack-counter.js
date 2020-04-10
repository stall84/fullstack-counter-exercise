const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var count = {num : 0};

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res, next) {
  res.send(count)
});

app.post("/increment", function (req, res, next) {
  console.log('Getting a increment request');
  count.num++;
  console.log(count.num);
  res.json(count)
});

app.post("/decrement", function (req, res, next) {
  console.log('Getting a decrement request');
  count.num--;
  res.json(count)
});

app.post("/reset", function (req, res, next) {
  console.log('Getting a reset request');
  count.num = 0;
  res.json(count)
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000")
});