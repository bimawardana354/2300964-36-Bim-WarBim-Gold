const productsModel = require('../models/products');

class productsController {
  async getProducts(req, res) {
    try {
      // Select operation
      const data = await productsModel.getProducts();

      res.json({
        status: 200,
        data: data,
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }

  async getOneProducts(req, res) {
    try {
      // Select operation
      const data = await productsModel.getOneProducts(req.params.id);

      if (!data) {
        res.json({ status: 404, message: 'Product not found' });
      }

      res.json({
        status: 200,
        data: data,
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }

  async insertProducts(req, res) {
    try {
      const products = await productsModel.insertProducts(req.body);
      console.log('create data product success');

      res.status(201).json({
        status: 201,
        message: 'product successfully added',
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }

  async updateProducts(req, res) {
    try {
      const products = await productsModel.updateProducts(req.body);
      console.log('update data product success');

      res.status(201).json({
        status: 201,
        message: 'product successfully updated',
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }

  async deleteOneProducts(req, res) {
    try {
      // Select operation
      const data = await productsModel.deleteOneProducts(req.params.id);
      console.log('delete data product success');

      if (!data) {
        res.json({ status: 404, message: 'Product not found' });
      }

      res.json({
        status: 200,
        message: 'product successfully deleted',
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }
}

module.exports = new productsController();
