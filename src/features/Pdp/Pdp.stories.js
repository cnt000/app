import React from 'react';

import Pdp from './Pdp';
import { withLabels } from '../Labels/withLabels';
import product from '../../data/products/clavifolius.json';

export default {
  component: Pdp,
  title: 'Pdp',
};

const pdp = () => <Pdp {...product} />;

export const Default = withLabels(pdp);
