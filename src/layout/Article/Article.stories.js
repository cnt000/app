import React from 'react';

import Article from './Article';
import labels from '../../labels/labels.json';
import articleContent from '../../labels/articles/consigliColtivazione.md';

export default {
  component: Article,
  title: 'Article',
};

export const Default = () => <Article {...labels} articleContent={articleContent} />;
