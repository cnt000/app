import React from 'react';

import Pdp from './Pdp';
import labels from '../../labels/labels.json';

const productInfo = {
  productName: 'Adromischus clavifolius',
  productImage:
    'http://www.pungilandia.com/php/images/hi/adromischus-clavifolius.jpg',
  vaseDiameter: 'Vaso 24cm',
  price: 'Prezzo: € 9,00',
};

export default {
  component: Pdp,
  title: 'Pdp',
};

export const Default = () => <Pdp {...labels} {...productInfo} />;
