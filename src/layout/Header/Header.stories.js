import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/labels';

export default {
  component: Header,
  title: 'Header',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(true)'),
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Header {...actionsData} />
  </LabelsContext.Provider>
);
