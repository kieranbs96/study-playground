import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import SubSections from '../SubSections';

const MAIN_QUERY = gql`
  query MAIN_QUERY {
    pages {
      title
      slug
      background
      intro {
        title
        description
        image
        type
      }
    }
  }
`;

class Main extends Component {
  render() {
    const { pathName } = this.props;
    return (
      <Query query={MAIN_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data) return <p>No Item Found for {this.props.id}</p>;

          const { pages } = data;

          return pages.map(({ title, slug, background, intro }) => {
            if (pathName === `/${slug}`) {
              return <SubSections key={slug} subsections={intro} />;
            }

            return '';
          });
        }}
      </Query>
    );
  }
}

export default Main;

