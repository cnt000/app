import React from 'react';
import renderer from 'react-test-renderer';

import Plp from './Plp';
import LabelsContext from '../../features/labels';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Plp {...product} />
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

