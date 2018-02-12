/* tslint:disable */
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';

const baseUrl = process.env.API_URL || 'http://localhost:5000/';
const url = `${baseUrl}graphql`;

const networkInterface = createNetworkInterface({
  uri: url
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const productsQuery = gql`
query {
  productById(id: 2) {
    id
    name
    amount
    createdAt
    updatedAt
  }
}
`;

client.query({ query: productsQuery }).then(response => console.log(response));

export default client;
