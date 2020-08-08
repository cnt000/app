import React from 'react';

import Footer from './Footer';
import { withLabels } from '../../features/Labels/withLabels';

export default {
  component: Footer,
  title: 'Footer',
};

const footer = () => <Footer />;

export const Default = withLabels(footer);
