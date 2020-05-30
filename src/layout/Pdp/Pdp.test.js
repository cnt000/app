import React from 'react';
import renderer from 'react-test-renderer';
import Pdp from './Pdp';

it('renders correctly', () => {
  const tree = renderer.create(<Pdp />).toJSON();
  expect(tree).toMatchSnapshot();
});
