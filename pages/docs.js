import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Intro from '../components/Intro';

const DOCS_QUERY = gql`
  {
    pages {
      docs {
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

function Docs({ pathName }) {
  const { loading, error, data } = useQuery(DOCS_QUERY);
  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  const { docs } = data.pages;

  return (
    <Fragment>
      <Intro sectionData={ docs.intro } />
    </Fragment>
  );
}

export default Docs;