import React from 'react';

import Plp from './Plp';
import labels from '../../labels/labels.json';
import productInfo from '../../productData/productInfo.json';

export default {
  component: Plp,
  title: 'Plp',
};

export const Default = () => <Plp {...labels} {...productInfo} />;
