import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';
import Meta from '../Meta';

import { theme, Inner, GlobalStyle } from './style';

const PAGE_QUERY = gql`
  {
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

function Page({ pathName, children }) {
  const { loading, error, data } = useQuery(PAGE_QUERY);

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  const { pages } = data;

  let backgroundColor;

  pages.map(page => {
    if (pathName === `/${page.slug}`) {
      backgroundColor = page.background;
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle backgroundColor={backgroundColor} />
      <Header pathName={pathName} />
      <Inner>{children}</Inner>
      <Footer pathName={pathName} />
    </ThemeProvider>
  );
}

export default Page;
