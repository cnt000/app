import React from 'react';

import Header from './Header';

export default {
  component: Header,
  title: 'Header'
};

const labels = {
  openMenuLabel: 'apri il menu',
  title: 'Pungilandia',
  titleDescription: 'Piante grasse, strane ed insolite',
  goToCartLabel: 'vai al carrello',
};

export const Default = () => <Header {...labels} />;
