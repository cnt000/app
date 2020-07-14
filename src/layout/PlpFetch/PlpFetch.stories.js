import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import PlpFetch from './PlpFetch';
import labels from '../../data/labels/labels.json';
import products from '../../data/products/searchpage.json';
import LabelsContext from '../../features/labels';

export default {
  component: PlpFetch,
  title: 'PlpFetch',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <PlpFetch />
    </Router>
  </LabelsContext.Provider>
);
