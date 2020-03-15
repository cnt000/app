import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from './ProductList';

it('renders correctly', () => {
  const tree = renderer.create(<ProductList />).toJSON();
  expect(tree).toMatchSnapshot();
});
