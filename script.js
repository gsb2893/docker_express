var express = require('express');

const basic_auth = process.env.BASIC_AUTH;

const port = process.env.PORT | 3000;

//logger.info('Starting node server on port:', port);

var app = express();

app.get('/', function(req, res) {
    if(basic_auth != null){
        console.log('Its working!');
    }
  });

var server = app.listen(port); 