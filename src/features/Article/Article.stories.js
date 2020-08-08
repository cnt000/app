import React from 'react';

import Article from './Article';
import { withLabels } from '../Labels/withLabels';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Article,
  title: 'Article',
};

const article = () => <Article articleContent={articleContent} />;

export const Default = withLabels(article);
