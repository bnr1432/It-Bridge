const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('sample.txt', 'utf8');

// Handle data chunk by chunk
readStream.on('data', (chunk) => {
  console.log('New Chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading.');
});
