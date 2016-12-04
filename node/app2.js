var express = require('express')
var app = express()
app.disable('x-powered-by');
var redis = require('redis')
var client = redis.createClient('6379', 'redis');

app.get('/', function (req, res, next) {
  client.incr('counter', function(err, counter) {
   if(err) return next(err);
    res.send('This page has been viewed ' + counter );
    console.log(counter + 'times');
  });
});

app.get('/hello', function (req, res, next) {
  res.send("static response")
    console.log('static response');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});