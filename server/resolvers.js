const { find, filter } = require('lodash');

const products = require('./data.json');

const resolvers = {
  Query: {
    products: () => products,
  },
  Mutation: {
    createProduct: (_, { name, amount }) => {
      const newProduct = {
        id: products.length + 1,
        name,
        amount,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_, { id, name, amount }) => {
      const product = find(products, { id });
      if (!product) {
        throw new Error(`Couldn't find product with id ${id}`);
      }
      const newProduct = {
        ...product,
        id,
        name,
        updatedAt: new Date()
      }
      const indexOldProduct = products.findIndex(ele => ele.id === id);
      products[indexOldProduct] = newProduct;
      return newProduct;
    },
    deleteProduct: (_, { id }) => {
      const product = find(products, { id });
      const indexDeleteProduct = products.findIndex(ele => {
        ele.id === id
      });
      products.splice(indexDeleteProduct, 1);
      return product;
    }
  },
}

module.exports = {
  resolvers: resolvers
};
