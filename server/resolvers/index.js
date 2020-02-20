const pages = require('../data/index');

const resolvers = {
  Query: {
    pages: () => pages,
  },
};

module.exports = resolvers;