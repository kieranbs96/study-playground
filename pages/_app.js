import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import 'cross-fetch/polyfill';

import Page from '../components/Page';

const config = {
  uri: 'http://localhost:4000/',
};

const client = new ApolloClient({ ...config });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps, router } = this.props;

    return (
      <ApolloProvider client={client}>
        <Page pathName={router.pathname}>
          <Component pathName={router.pathname} {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default MyApp;
