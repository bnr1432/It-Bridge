var express = require('express');
var customerApp = express();

customerApp.use(express.json());
customerApp.use(express.urlencoded({ extended: true }));

customerApp.get('/', function(req, res){
    res.send("Hello Guest");
});

customerApp.get('/customer/:customerId', function(req, res){
    var custId = req.params.customerId;
    res.send("Customer Information Fetched for customer ID : " + custId);
});

customerApp.get('/customer/searchByName/:customerName', function(req, res){
    var custName = req.params.customerName;
    res.send("Customer Information Fetched for customer Name : " + custName);
});

customerApp.get('/customer/searchByMobile/:mobileNumber', function(req, res){
    var mobile = req.params.mobileNumber;
    res.send("Customer Information Fetched for customer Mobile Number : " + mobile);
});

customerApp.post('/customer', function(req, res){
    res.statusCode = 201;
    var customerId = req.body.customerId;
    var customerName = req.body.customerName;
    var mobileNumber = req.body.mobileNumber;
    var billAmount = req.body.billAmount;

    res.send("Customer Information Saved: " + customerId + " " + customerName + " " + mobileNumber + " " + billAmount);
});

customerApp.listen(8000);
console.log('Server started at port : 8000');
