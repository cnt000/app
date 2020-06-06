import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import labels from '../../labels/labels.json'

console.log(labels);

export default {
  component: Header,
  title: 'Header'
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(true)'),
};

export const Default = () => <Header {...labels} {...actionsData} />;
