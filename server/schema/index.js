const { gql } = require('apollo-server');

const typeDefs = gql`
  type Intro {
    title: String,
    description: String,
    image: String
    type: String
  }

  type Footer {
    title: String
    logo: String
  }

  type Pages {
    home: Page
    docs: Page
    blog: Page
  }

  type Page {
    title: String
    slug: String
    background: String
    intro: Intro
  }

  type Query {
    pages: Pages
    footer: Footer
  }
`;

module.exports = typeDefs;