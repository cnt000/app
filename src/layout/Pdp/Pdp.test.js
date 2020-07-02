import React from 'react';
import renderer from 'react-test-renderer';

import LabelsContext from '../../features/labels';
import labels from '../../data/labels/labels.json';
import Pdp from './Pdp';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Pdp />
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
