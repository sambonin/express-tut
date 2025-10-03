const express = require('express');
const path = require('path');
const app = express();
const {products, products} = require('./data')


app.use( express.static('./public'))

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req, res) => {
    const newProducts = products.map((products)=> {
        const {id,image,name} = products;
        return {id, name, image}
    })

    res.json(products)
})

app.get('/api/products/:productID',(req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find(
        (products) => product.id === Number(productID)
    )
    if(!singleProduct) {
        return res.status(404).send('Product does not exist')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {

    const {search, limit} = req.query
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((products)=> {
            return products.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1) {
        res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
    res.send(req.params)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    res.send('hello world')

})

app.listen(2000, (req, res) => {
    console.log('server is listening on port 2000...')
})


