import React from 'react';
import renderer from 'react-test-renderer';

import Pdp from './Pdp';
import LabelsContext from '../Labels';
import labels from '../../data/labels/labels.json';
import { BrowserRouter as Router } from 'react-router-dom';
import product from '../../data/products/clavifolius.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Router>
          <Pdp {...product} />
        </Router>
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
