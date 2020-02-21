const pages = require('../data/pages');
const footer = require('../data/footer');

const resolvers = {
  Query: {
    pages: () => pages,
    footer: () => footer
  },
};

module.exports = resolvers;