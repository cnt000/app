import React from 'react';
import { action } from '@storybook/addon-actions';

import Menu from './Menu';

export default {
  component: Menu,
  title: 'Menu',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(false)'),
};

export const Default = () => <Menu isOpen={true} {...actionsData} />;
export const Closed = () => <Menu isOpen={false} {...actionsData} />;

