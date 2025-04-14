//Activity -1 and Activity -2 Solutions


const fs = require('fs');
const express = require('express');

const productApp = express();
productApp.use(express.json());

// --- Sync function ---
function getProductsSync() {
    const data = fs.readFileSync('Product.json', 'utf8');
    return JSON.parse(data);
}

// --- SYNC: Get all products ---
productApp.get('/products-sync', (req, res) => {
    try {
        const data = getProductsSync();
        res.send(data.product); // sending array only
    } catch (err) {
        res.status(500).send("Error reading product data");
    }
});

// GET product by ID (sync)
productApp.get('/products-sync/:productId', (req, res) => {
    try {
        const data = getProductsSync();
        const products = data.product;
        const productId = parseInt(req.params.productId);

        // Make sure to parse both sides if productId in JSON is string
        const product = products.find(p => parseInt(p.productId) === productId);

        if (product) {
            res.send(product);
        } else {
            res.status(404).send("Product not found");
        }
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).send("Error processing request");
    }
});

// --- Async function ---
async function getProductsAsync() {
    const data = await fs.promises.readFile('Product.json', 'utf8');
    return JSON.parse(data);
}

// --- ASYNC: Get all products ---
productApp.get('/products-async', async (req, res) => {
    try {
        const data = await getProductsAsync();
        res.send(data.product); // sending the array only
    } catch (err) {
        res.status(500).send("Error reading product data");
    }
});


productApp.get('/products-async/displayname', async (req, res) => {
    try {
        const data = await getProductsAsync();
        const products = data.product;
        const productNames = products.map(product => product.productName + "has bill is " + product.price);
        res.send(productNames);
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).send("Error processing request");
    }
});


// --- ASYNC: Get product by ID ---
productApp.get('/products-async/:productId', async (req, res) => {
    try {
        const data = await getProductsAsync();
        const products = data.product;
        const productId = parseInt(req.params.productId);

        const product = products.find(p => parseInt(p.productId) === productId);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send("Product not found");
        }
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).send("Error processing request");
    }
});

productApp.listen(8001, () => {
    console.log("Server started at port 8001");
});
