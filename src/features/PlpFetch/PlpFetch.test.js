import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import LabelsContext from '../../features/Labels';
import labels from '../../data/labels/labels.json';
import PlpFecth from './PlpFetch';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Router>
          <PlpFecth />
        </Router>
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
