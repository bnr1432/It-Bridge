const fs = require('fs');

// Get target file name from command line
// const targetFile = process.argv[2];

const targetFile = 'CopiedFile.txt';


// Read data from the source file (Sample.txt)
fs.readFile('Sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading Sample.txt:", err.message);
    return;
  }

  // Write the data into the target file
  fs.writeFile(targetFile, data, (err) => {
    if (err) {
      console.error("Error writing to target file:", err.message);
      return;
    }

    console.log(`Data copied to ${targetFile} successfully!`);
  });
});
