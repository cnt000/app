import React from 'react';

import Pdp from './Pdp';
import labels from '../../labels/labels.json';

export default {
  component: Pdp,
  title: 'Pdp',
};

export const Default = () => <Pdp {...labels} />;
