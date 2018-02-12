import { ApolloClient, createNetworkInterface } from 'react-apollo';

const baseUrl = process.env.API_URL || 'http://localhost:5000/';
const url = `${baseUrl}graphql`;

const networkInterface = createNetworkInterface({
  uri: url
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

export default client;
