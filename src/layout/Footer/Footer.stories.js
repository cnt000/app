import React from 'react';

import Footer from './Footer';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/labels';

export default {
  component: Footer,
  title: 'Footer',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Footer />
  </LabelsContext.Provider>
);
