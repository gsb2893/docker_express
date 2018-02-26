var express = require('express');

const port = process.env.PORT | 3000;

logger.info('Starting node server on port:', port);

var app = express();

app.get('/', function(req, res) {
    console.log('Its working!');
  });

var server = app.listen(port); 
