import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Intro from '../components/Intro';

const BLOG_QUERY = gql`
  {
    pages {
      blog {
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

function Blog({ pathName }) {
  const { loading, error, data } = useQuery(BLOG_QUERY);
  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  const { blog } = data.pages;

  return (
    <Fragment>
      <Intro sectionData={ blog.intro } />
    </Fragment>
  );
}

export default Blog;