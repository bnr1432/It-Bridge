var fs = require('fs');

var myreadstream = fs.createReadStream('sample.txt', 'utf8');
var mywritestream = fs.createWriteStream('sample2.txt', 'utf8');

// myreadstream.pipe(mywritestream); // pipe method is used to read from one stream and write to another


//another way to read and write streams
myreadstream.on('data', function(chunk) {
    console.log('New Chunk Received: ' + chunk);
    mywritestream.write(chunk); // write method is used to write to a stream
});