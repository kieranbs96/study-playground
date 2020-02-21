import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import NProgress from 'nprogress';
import { HeaderContainer, Active, MenuItem, Heading } from './style';

const HEADER_QUERY = gql`
  {
    pages {
      home {
        title
        slug
      }
      docs {
        title
        slug
      }
      blog {
        title
        slug
      }
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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Header({ pathName, children }) {
  const [count, setCount] = useState(0);

  const { loading, error, data } = useQuery(HEADER_QUERY);

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  let pageTitle = '';

  const pageList = Object.keys(data.pages).map((page) => {
    const { title, slug } = data.pages[page];

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

  const color = count > 0 ? getRandomColor() : '#333';

  return (
    <HeaderContainer>
      <Heading color={color} onClick={() => setCount(count + 1)}>
        Study Playground <span>/</span> {pageTitle ? pageTitle : `Error`}
      </Heading>
      <ul>{ pageList }</ul>
    </HeaderContainer>
  );
}

export default Header;
export { HEADER_QUERY };
