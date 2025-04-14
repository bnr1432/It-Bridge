const fs = require('fs');

fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('file.txt was deleted');
});

fs.mkdirSync("hello");
console.log("hello directory created");