import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Menu from './Menu';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

export default {
  component: Menu,
  title: 'Menu',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(false)'),
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Menu isOpen={true} {...actionsData} />
    </Router>
  </LabelsContext.Provider>
);
export const Closed = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Menu isOpen={false} {...actionsData} />
    </Router>
  </LabelsContext.Provider>
);
