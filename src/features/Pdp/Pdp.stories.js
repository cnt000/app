import React from 'react';

import Pdp from './Pdp';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';
import product from '../../data/products/clavifolius.json';

export default {
  component: Pdp,
  title: 'Pdp',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Pdp {...product} />
  </LabelsContext.Provider>
);
