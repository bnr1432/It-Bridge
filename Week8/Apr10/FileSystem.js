const fs = require('fs');
// Synchronous file read
const data = fs.readFileSync("Sample.txt", "utf8");
console.log(data); // get//
console.log("This is printed after the file read is complete.");


// Asynchronous file read
// const fs = require('fs');
// const data = fs.readFile('Sample.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log("This is printed before the file read is complete.");
// console.log("This is printed after the file read is complete.");



