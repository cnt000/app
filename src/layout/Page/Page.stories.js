import React from 'react';

import Page from './Page';
import labels from '../../labels/labels.json';

export default {
  component: Page,
  title: 'Page',
};

export const Default = () => <Page {...labels} />;
