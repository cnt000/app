import React from 'react';

import Menu from './Menu';

export default {
  component: Menu,
  title: 'Menu',
};

export const Default = () => <Menu />;

export const Desktop = () => (
  <Menu />
);

export const Tablet = () => (
  <Menu />
);
