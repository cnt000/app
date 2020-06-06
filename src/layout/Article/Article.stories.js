import React from 'react';

import Article from './Article';
import labels from '../../data/labels/labels.json';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Article,
  title: 'Article',
};

export const Default = () => <Article {...labels} articleContent={articleContent} />;
