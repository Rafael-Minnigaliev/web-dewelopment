const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser');

const app = express();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('./public'));

app.get('/good', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const item = req.body;
        cart.push(item);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
        });
    });
});

app.delete('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const item = req.body;
        cart = cart.filter(good => good.id !== item.id);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
        });
    });
});


app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

