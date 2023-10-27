const express = require('express');
const productsController = require('../controllers/products_controller');
const route = express.Router();

route.get('/products', productsController.getProducts);
route.get('/products/:id', productsController.getOneProducts);
route.post('/products', productsController.insertProducts);
route.put('/products/:id', productsController.updateProducts);
route.delete('/products/:id', productsController.deleteOneProducts);

module.exports = route;
