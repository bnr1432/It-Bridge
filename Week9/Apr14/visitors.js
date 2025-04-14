const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json()); // To parse JSON in POST/PUT


async function ReadVisitors() {
    data =  await fs.readFileSync('visitors.json', 'utf8');
    return JSON.parse(data);
 }

app.get('/visitors', async(req, res) => {
    visitordata = await ReadVisitors();
    res.send(visitordata); // sending the array only
});

async function WriteVisitors(data) {
    await fs.writeFileSync('visitors.json', JSON.stringify(data, null, 2), 'utf8');
}
app.post('/visitors', async(req, res) => {

    var visitordata = await ReadVisitors();

    var newvisitor = {...req.body};
    
    visitordata.push(newvisitor);
    await WriteVisitors(visitordata);
    res.send("New visitor added successfully!" + newvisitor.visitorName);
    
});


app.delete('/visitors/:visitorId', async(req, res) => {

    var visitorId = parseInt(req.params.visitorId);

    var visitordata = await ReadVisitors();

    const updatevisitor = visitordata.filter((visitor) => visitor.visitorID !== visitorId);

    if(visitordata.length === updatevisitor.length) {
        res.status(404).send("Visitor not found!");
    }
    else {
        await WriteVisitors(updatevisitor);
        res.send("Visitor deleted successfully!");
    }
  
});







// app.post('/visitors/', async(req, res) => {
//     var newvisitor = {...req.body};
//     // console.log(newvisitor);
//     res.send("New visitor added successfully!" + newvisitor.visitorName);

// });


app.listen(8001, () => {    
    console.log("Server running on http://localhost:8001");
});