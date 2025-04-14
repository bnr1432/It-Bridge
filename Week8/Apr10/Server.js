var http = require('http');
function Start(portNumber){
    function onRequest(request, response){
        console.log("Request received.");
        response.write("Hello World!");
        response.end();
    }
    http.createServer(onRequest).listen(portNumber);
    console.log("Server(Async) has started on port " + portNumber);
}
module.exports.Start = Start;

// Start(8888);