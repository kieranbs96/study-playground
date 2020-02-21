import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Intro from '../components/Intro';

const HOME_QUERY = gql`
  {
    pages {
      home {
        slug
        intro {
          title
          description
          image
          type
        }
      }
    }
  }
`;

function Home({ pathName }) {
  const { loading, error, data } = useQuery(HOME_QUERY);
  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  const { home } = data.pages;

  return (
    <Fragment>
      <Intro sectionData={ home.intro } />
    </Fragment>
  );
}

export default Home;
