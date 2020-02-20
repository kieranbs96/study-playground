const { gql } = require('apollo-server');

const typeDefs = gql`
  type Section {
    title: String,
    description: String,
    image: String
    type: String
  }

  type Page {
    title: String
    slug: String
    background: String
    intro: [Section]
  }

  type Query {
    pages: [Page]
  }
`;

module.exports = typeDefs;