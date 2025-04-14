const http = require('http');
const fs = require('fs');

// Read content from Sample.txt
const data = fs.readFileSync('blog.txt', 'utf8');

// Create server
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(data); // Send file content to browser
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
