const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON in POST/PUT

app.get('/user', (req, res) => {
    res.send("GET: Fetch user");
});

app.post('/user', (req, res) => {
    res.send("POST: Create new user");
});

app.put('/user/:id', (req, res) => {
    res.send(`PUT: Replace user ${req.params.id}`);
});

app.patch('/user/:id', (req, res) => {
    res.send(`PATCH: Update user ${req.params.id}`);
});

app.delete('/user/:id', (req, res) => {
    res.send(`DELETE: Remove user ${req.params.id}`);
});

app.all('/test', (req, res) => {
    res.send(`ALL: You used ${req.method}`);
});

app.listen(8001, () => {
    console.log('Server running on http://localhost:8001');
});
