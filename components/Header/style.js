import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  padding: .5rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0 1.2rem 0 0;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      margin-left: .9rem;
      padding-left: .9rem;

      &:not(:first-of-type) {
        border-left: 2px solid #333;
      }

      a {
        color: #333;
        text-decoration: none;
      }

    }
  }
`;


export const MenuItem = styled.li`
  font-weight: normal;
`;

export const Active = styled.li`
  font-weight: bold;
`;

export const Heading = styled.h2`
  color: ${props => props.color}
`;