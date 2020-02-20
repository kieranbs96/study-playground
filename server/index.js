const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/index');

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});