const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');

const { schema } = require('./schema');

const PORT = 5000;
const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Something went wrong`);
  } else {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
  }
});
