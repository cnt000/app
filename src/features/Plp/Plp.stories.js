import React from 'react';

import Plp from './Plp';
import { withLabels } from '../Labels/withLabels';
import products from '../../data/products/searchpage.json';
import { withRouter } from '../Router/withRouter';

export default {
  component: Plp,
  title: 'Plp',
};
const plp = () => <Plp products={products} />;
export const Default = withLabels(withRouter(plp));
