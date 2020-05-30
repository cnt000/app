import React from 'react';

import Header from './Header';
import labels from '../../labels/labels.json'

console.log(labels);

export default {
  component: Header,
  title: 'Header'
};

export const Default = () => <Header {...labels} />;
