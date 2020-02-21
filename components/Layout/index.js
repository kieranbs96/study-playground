import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Header from '../Header';
import Footer from '../Footer';
import Meta from '../Meta';

import { theme, Inner, GlobalStyle, Container } from './style';

const LAYOUT_QUERY = gql`
  {
    pages {
      home {
        slug
        background
      }
      docs {
        slug
        background
      }
      blog {
        slug
        background
      }
    }
  }
`;

function Layout({ pathName, children, settings }) {
  const { loading, error, data } = useQuery(LAYOUT_QUERY);

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  const { pages } = data;

  let backgroundColor, pageTitle;

  Object.keys(pages).map(page => {
    const { background, slug, title } = pages[page];

    if (pathName === `/${slug}`) {
      backgroundColor = background;
      pageTitle = title;
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Meta title={pageTitle} />
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>
        <Header pathName={pathName} />
        <Inner>
          {children}
        </Inner>
        <Footer pathName={pathName} />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
