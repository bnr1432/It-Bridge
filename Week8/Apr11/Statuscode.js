var express = require('express');
var customerApp = express();

customerApp.get('/', function (req, res) {
    res.send('Welcome to customer APP !');
});

customerApp.get('/customer', function (req, res) {
    res.send('Information is fetching !');
});

customerApp.post('/customer', function (req, res) {
    res.statusCode = 201;   
    res.send('  customer POst !');
});
customerApp.listen(202)