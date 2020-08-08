import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import { withLabels } from '../../features/Labels/withLabels';

export default {
  component: Menu,
  title: 'Menu',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(false)'),
};

const menu = () => (
  <Router>
    <Menu isOpen={true} {...actionsData} />
  </Router>
);
const closeMenu = () => (
  <Router>
    <Menu isOpen={false} {...actionsData} />
  </Router>
);

export const Closed = withLabels(menu);
export const Default = withLabels(closeMenu);
