const express = require('express');
const fs = require('fs');
const app = express();

// Read JSON file synchronously
 async function ReadVisitors() {
    const data = await fs.readFileSync('Data.json', 'utf8');
    return JSON.parse(data);
}


app.get('/visitors/searchbyname/:visitorName', async (req, res) => {
    const getName = req.params.visitorName.toLowerCase();
    const visitordata =  await ReadVisitors();

    // Filter visitors with names containing the search term
    const matchedVisitors = visitordata.filter(visitor =>
        visitor.visitorName.toLowerCase().includes(getName)
    );

    if (matchedVisitors.length === 0) {
        res.status(404).send("Visitor not found!");
    } else {
        res.send(matchedVisitors);
    }
});

for(;;)

    while(true)

app.get('/visitors/:visitorName', async (req, res) => {

    let matchedVisitors = [];   // Taking empty array to store matched visitors

    let searchName = req.params.visitorName.toLowerCase();  //taking the name from the URL and converting it to lower case

    const visitordata = await ReadVisitors(); // Reading the data from the JSON file


    for (let i = 0; i < visitordata.length; i++) {
    let currentName = visitordata[i].visitorName.toLowerCase();
        if (currentName.indexOf(searchName) !== -1) {
            matchedVisitors.push(visitordata[i]);
        }
    }
    if (matchedVisitors.length === 0) {
        res.status(404).send("Visitor not found!");
    } else {
        res.send(matchedVisitors);
    }
});









// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
