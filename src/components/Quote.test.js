import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote page="http://localhost:3000/quotes">Quote</Quote>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
