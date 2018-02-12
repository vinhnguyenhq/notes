const { makeExecutableSchema } = require('graphql-tools');

const { resolvers } = require('./resolvers');

const typeDefs = `
  type Product {
    id: Int!
    name: String!
    amount: Int!
    price: Int
    thumbnail: String
    createdAt: String
    updatedAt: String
  }
  #The root of all queries:
  type Query {
    products(currentId: Int): [Product]
    productById(id: Int!): Product
  }
  type Mutation {
    createProduct(name: String!, amount: Int!):Product
    updateProduct(id: Int!, name: String, amount: Int): Product
    deleteProduct(id: Int!): Product
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = {
  schema: schema
};
