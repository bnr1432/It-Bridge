
var server = require('http');
server.createServer(function(req, res) {
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3040);
console.log('Server is running on port 3040');


