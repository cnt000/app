import React from 'react';
import renderer from 'react-test-renderer';
import Plp from './Plp';

it('renders correctly', () => {
  const tree = renderer.create(<Plp />).toJSON();
  expect(tree).toMatchSnapshot();
});
