import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import { withLabels } from '../../features/Labels/withLabels';
import { withRouter } from '../../features/Router/withRouter';

export default {
  component: Menu,
  title: 'Menu',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(false)'),
};

const menu = () => <Menu isOpen={true} {...actionsData} />;
const closeMenu = () => <Menu isOpen={false} {...actionsData} />;

export const Closed = withLabels(withRouter(menu));
export const Default = withLabels(withRouter(closeMenu));
