var express = require('express');

const Request = require("piau");

const port = process.env.PORT | 3000;

//logger.info('Starting node server on port:', port);

var app = express();

app.get('/', function(req, res) {
    Request._test();
  });

var server = app.listen(port); 