const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to our API!");
});

app.get('/json', (req, res) => {
    res.json({ product: "Laptop", price: 1000 });
});

app.get('/error', (req, res) => {
    res.status(404).send("Resource not found");
});

app.get('/redirect', (req, res) => {
    res.redirect('/json');
});

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/demo.html');
});

app.get('/download', (req, res) => {
    res.download('./demo.html');
});

app.get('/header', (req, res) => {
    res.set('Custom-Header', 'NagarjunaDev').send('Header set!');
});

app.get('/type', (req, res) => {
    res.type('text/html').send('<h2>This is HTML</h2>');
});

app.get('/end', (req, res) => {
    res.end("Response ended.");
});

app.listen(8001, () => {
    console.log("Server running on http://localhost:8001");
});




app.listen(5050,() =>{
    console.log("Server is running on port 5050");
});