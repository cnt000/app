import React from 'react';

import Plp from './Plp';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';

export default {
  component: Plp,
  title: 'Plp',
};

export const Default = () => <Plp {...labels} {...product} />;
