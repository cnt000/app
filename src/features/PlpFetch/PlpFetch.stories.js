import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PlpFetch from './PlpFetch';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../Labels';

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
