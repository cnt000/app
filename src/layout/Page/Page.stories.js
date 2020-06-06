import React from 'react';

import Page from './Page';
import Plp from '../Plp/Plp';
import Pdp from '../Pdp/Pdp';
import Article from '../Article/Article';

import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Page,
  title: 'Page',
};

const plp = <Plp {...labels} {...product} />;
const pdp = <Pdp {...labels} {...product} />;
const article = <Article {...labels} articleContent={articleContent} />;


export const PagePlp = () => <Page {...labels}>{plp}</Page>;
export const PagePdp = () => <Page {...labels}>{pdp}</Page>;
export const PageArticle = () => <Page {...labels}>{article}</Page>;
