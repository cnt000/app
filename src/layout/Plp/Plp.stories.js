import React from 'react';

import Plp from './Plp';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';
import LabelsContext from '../../features/labels';

export default {
  component: Plp,
  title: 'Plp',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Plp {...product} />
  </LabelsContext.Provider>
);
