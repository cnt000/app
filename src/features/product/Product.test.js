import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Product';

it('renders correctly', () => {
  const tree = renderer
    .create(
        <Product />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
