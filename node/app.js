var express = require('express')
var app = express()
app.disable('x-powered-by');

app.get('/', function (req, res) {
  res.send('Hello Rotem!')
  console.log(req.headers)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})