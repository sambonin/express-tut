const express = require('express');
const path = require('path');
const app = express();
const {products} = require('./data')


app.use( express.static('./public'))

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req, res) => {
    res.json(products)
})

app.listen(2000, (req, res) => {
    console.log('server is listening on port 2000...')
})


