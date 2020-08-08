import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Plp from './Plp';
import { withLabels } from '../Labels/withLabels';
import products from '../../data/products/searchpage.json';

export default {
  component: Plp,
  title: 'Plp',
};

const plp = () => (
  <Router>
    <Plp products={products} />
  </Router>
);

export const Default = withLabels(plp);
