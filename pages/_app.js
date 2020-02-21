import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import 'cross-fetch/polyfill';

import Layout from '../components/Layout';

import { endpoint, prodEndpoint } from '../config';

const config = {
  uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
};

const client = new ApolloClient({ ...config });

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }

  render() {
    const { Component, apollo, pageProps, router } = this.props;

    return (
      <ApolloProvider client={client}>
        <Layout pathName={router.pathname}>
          <Component pathName={router.pathname} {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default MyApp;
