import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Nav, { NAV_QUERY } from '../components/Header';
import { MockedProvider } from '@apollo/client';
import { fakePages } from '../utils/testUtils';
import React from 'react';

describe('<Nav />', () => {
  xit('renders with proper data', async () => {
    const mocks = [
      {
        request: { query: NAV_QUERY, variables: { id: '123' }},
        result: { data: {
          pages: fakePages()
        }}
      }
    ]
    const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <Nav />
    </MockedProvider>
    );
  });
});
