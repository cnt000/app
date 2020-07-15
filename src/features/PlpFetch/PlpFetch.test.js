import React from 'react';
import renderer from 'react-test-renderer';

import PlpFecth from './PlpFetch';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PlpFecth />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
