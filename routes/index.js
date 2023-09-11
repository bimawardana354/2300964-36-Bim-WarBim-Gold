const express = require('express');
// const app = express();
const productsController = require('../controllers/products_controller');
const route = express.Router();

route.get('/product', productsController.getProducts);
route.get('/product/:id', productsController.getOneProducts);
route.post('/product', productsController.insertProducts);
route.put('/productUpdate', productsController.updateProducts);
route.delete('/product/:id', productsController.deleteOneProducts);

module.exports = route;
