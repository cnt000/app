import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Menu from './Menu';

export default {
  component: Menu,
  title: 'Menu',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(false)'),
};

export const Default = () => (
  <Router>
    <Menu isOpen={true} Link={Link} {...actionsData} />
  </Router>
);
export const Closed = () => (
  <Router>
    <Menu isOpen={false} Link={Link} {...actionsData} />
  </Router>
);
