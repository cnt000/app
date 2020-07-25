import React from 'react';
import renderer from 'react-test-renderer';

import Pdp from './Pdp';
import LabelsContext from '../Labels';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Pdp {...product} />
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
