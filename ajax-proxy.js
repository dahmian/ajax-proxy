var express = require('express');
var request = require('request');

var app = express();
app.use('/api/*', function(req, res, next) {
  var url = 'https://www.example.com' + req.originalUrl;
  var options = {
    url: url
  };
  req.pipe(request(options)).pipe(res);
});
app.listen(8000);

module.exports = app;
