import React from 'react';
import renderer from 'react-test-renderer';
import Btn from './Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Btn page="http://localhost:3000/quotes">Button</Btn>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
