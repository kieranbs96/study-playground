import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 0.625rem;
  }

  body {
    color: ${props => (props.whiteColor ? 'white' : '#333')};
    background-color: ${props => props.backgroundColor};
    margin: 0;
    font-size: 1.6rem;
    font-family: Helvetica Neue, sans-serif;
    padding: 5vh 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

`;

export const Inner = styled.main`
  max-width: 96rem;
  padding: 1.6rem;
  margin: 0 auto;
  min-height: 80vh;
  background: white;

  img {
    max-width: 100%;
  }

`;
