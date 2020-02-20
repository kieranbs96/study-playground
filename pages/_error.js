import React from 'react';
import Page from '../components/Page';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.backgroundColor};
  }
`;

const ErrorPage = styled.div``;

const FourOhFour = styled.div``;

function Error({ statusCode }) {
  return (
    <ErrorPage>
      <GlobalStyle backgroundColor={`#EF626C`} />
      {statusCode && statusCode === 404 ? (
        <div>
          <h3>Page Not Found</h3>
          <p>Sorry about that...</p>
        </div>
      ) : (
        <div>
          <h3>An error occurred on the client</h3>
          <p>Sorry about that...</p>
        </div>
      )}
    </ErrorPage>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
