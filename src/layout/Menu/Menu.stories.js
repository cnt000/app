import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Menu from './Menu';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/labels';

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
      <Menu isOpen={true} Link={Link} {...actionsData} />
    </Router>
  </LabelsContext.Provider>
);
export const Closed = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Menu isOpen={false} Link={Link} {...actionsData} />
    </Router>
  </LabelsContext.Provider>
);
