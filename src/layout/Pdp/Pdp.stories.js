import React from 'react';

import Pdp from './Pdp';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json'

export default {
  component: Pdp,
  title: 'Pdp',
};

export const Default = () => <Pdp {...labels} {...product} />;
