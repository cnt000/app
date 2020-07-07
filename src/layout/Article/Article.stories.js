import React from 'react';

import Article from './Article';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/labels';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Article,
  title: 'Article',
};

export const Default = () => (
  <LabelsContext.Provider value={labels}>
    <Article articleContent={articleContent} />
  </LabelsContext.Provider>
);
