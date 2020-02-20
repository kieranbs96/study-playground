import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import React, { Component } from 'react';
import { HeaderContainer, Active, MenuItem } from './style';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo';

const HEADER_QUERY = gql`
  query HEADER_QUERY {
    pages {
      title
      slug
    }
  }
`;

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  render() {
    return (
      <Query query={HEADER_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data) return <p>No Item Found for {this.props.id}</p>;
          const { title, slug } = data;
          const { pathName } = this.props;

          let pageTitle = '';

          const pageList = data.pages.map(({ title, slug }) => {
            if (`/${slug}` === pathName) {
              pageTitle = title;

              return (
                <Active key={slug}>
                  <Link href={`/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </Active>
              );
            } else {
              return (
                <MenuItem key={slug}>
                  <Link href={`/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </MenuItem>
              );
            }
          });

          return (
            <HeaderContainer>
              <h2>
                Study Playground <span>/</span> {pageTitle ? pageTitle : `Error`}
              </h2>
              <ul>{pageList}</ul>
            </HeaderContainer>
          );
        }}
      </Query>
    );
  }
}

export default Header;
export { HEADER_QUERY };
