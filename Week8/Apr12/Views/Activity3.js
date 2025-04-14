const express = require('express');
const fs = require('fs');

const app = express();

fs.readFile('About.html', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

app.get('/', (req, res) => {
    res.send('Check your console for HTML file contents!');
});

app.listen(8001, () => {
    console.log("Server started at port 8001");
});