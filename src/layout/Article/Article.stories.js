import React from 'react';

import Article from './Article';
import labels from '../../labels/labels.json';

export default {
  component: Article,
  title: 'Article',
};

export const Default = () => <Article {...labels} />;
