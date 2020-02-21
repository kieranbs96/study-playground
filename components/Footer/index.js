import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { FooterContainer, Active, MenuItem } from './style';

const FOOTER_QUERY = gql`
  {
    footer {
      title
      logo
    }
  }
`;

function Footer({ pathName, children }) {
  const { loading, error, data } = useQuery(FOOTER_QUERY);

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No Item Found for {this.props.id}</p>;

  console.log(data);
  const { title, logo } = data.footer;

  return (
    <FooterContainer>
      <h2>
        { title }
      </h2>
      <img src={logo} alt={title} />
    </FooterContainer>
  );
}

export default Footer;
