const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser');

const app = express();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('./dist'));

app.get('/api/good', (req, res) => {
    fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/cart', jsonParser, (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const item = req.body;
        console.log(item)
        const goodInCart = cart.find((good) => good.id === item.id)
        if (goodInCart) {
            goodInCart.quantity++
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.send('ok')
        });
    });
});

app.delete('/api/cart', jsonParser, (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const item = req.body;
        if (item.length) {
            cart = []
        } else {
            cart = cart.filter(good => good.id !== item.id);
        }
        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.send('ok')
        });
    });
});


app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

