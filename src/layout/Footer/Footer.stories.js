import React from 'react';

import Footer from './Footer';
import labels from '../../labels/labels.json';

export default {
  component: Footer,
  title: 'Footer',
};

export const Default = () => <Footer {...labels} />;
