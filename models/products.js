const db = require('../db/db');

class productsModels {
  getProducts() {
    const products = db('products');
    return products;
  }

  getOneProducts(id) {
    const products = db('products').where('id', id);
    return products;
  }

  insertProducts(dataProducts) {
    const { id, name, price, stock, category, description, image } = dataProducts;

    const products = db('products').insert({
      id: id,
      name: name,
      price: price,
      stock: stock,
      category: category,
      description: description,
      image: image,
    });
    return products;
  }

  updateProducts(dataProducts) {
    const { id, name, price, stock, category, description, image } = dataProducts;

    const products = db('products').where('id', id).update({
      name: name,
      price: price,
      stock: stock,
      category: category,
      description: description,
      image: image,
    });
    return products;
  }

  deleteOneProducts(id) {
    const products = db('products').where('id', id).del();
    return products;
  }
}

module.exports = new productsModels();
