import React from 'react';
import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5.6rem;
  padding-bottom: 4rem;
  border-bottom: 1px dotted #333;

  &.text-section {

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    img {
      flex: 1;
      margin-left: 1rem;
    }
  }

  &.gallery-section {
    flex-direction: column;

    img {
      order: 1;

    }

    div {
      order: 2;
    }
  }
`;