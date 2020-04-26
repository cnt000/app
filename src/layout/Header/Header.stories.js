import React from 'react';

import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const Default = () => <Header />;

export const Desktop = () => (
  <Header />
);

export const Tablet = () => (
  <Header />
);
