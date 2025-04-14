var http = require('http');
var fs = require('fs');

function Started(portNumber){
    function onRequest(request, response) {
        console.log('Request received at ' + request.url);
         var myindexPage = fs.createReadStream(__dirname +  '/Index.html', 'utf-8'); // pipe method is used to read from one stream and write to another
        myindexPage.pipe(response);
        // response.writeHead(200, {'Content-Type': 'text/html'});
        // fs.createReadStream('sample.txt').pipe(response); // pipe method is used to read from one stream and write to another
    }
    http.createServer(onRequest).listen(portNumber)
        console.log('Server is listening on port ' + portNumber);
   
}
module.exports = Started; // export the function so it can be used in other files
Started(8040); // start the server on port 6060