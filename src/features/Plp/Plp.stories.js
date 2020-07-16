import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Plp from './Plp';
import labels from '../../data/labels/labels.json';
import products from '../../data/products/searchpage.json';
import LabelsContext from '../labels';

export default {
  component: Plp,
  title: 'Plp',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Plp products={products} />
    </Router>
  </LabelsContext.Provider>
);
