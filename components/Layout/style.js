import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#f7f7f7',
  maxWidth: '96rem',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 0.625rem;
  }

  body {
    color: ${props => (props.whiteColor ? 'white' : theme.black)};
    background-color: ${props => props.backgroundColor};
    margin: 0;
    font-size: 1.6rem;
    font-family: Helvetica Neue, sans-serif;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

`;

export const Inner = styled.main`
  min-height: 75vh;
  padding: 1.6rem;

  img {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: ${theme.maxWidth};
  padding: 0;
  margin: 1.6rem auto;
  background: ${theme.offWhite};
`;
