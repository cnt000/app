import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Plp from './Plp';
import LabelsContext from '../../features/Labels';
import labels from '../../data/labels/labels.json';
import products from '../../data/products/searchpage.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Router>
          <Plp products={products} />
        </Router>
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
