import React from 'react';

import Pdp from './Pdp';
import labels from '../../labels/labels.json';
import productInfo from '../../productData/productInfo.json'

export default {
  component: Pdp,
  title: 'Pdp',
};

export const Default = () => <Pdp {...labels} {...productInfo} />;
