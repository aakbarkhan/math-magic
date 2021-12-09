import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home page="http://localhost:3000/">Home</Home>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
