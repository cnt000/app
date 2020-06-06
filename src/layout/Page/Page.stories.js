import React from 'react';

import Page from './Page';
import Plp from '../Plp/Plp';
import Pdp from '../Pdp/Pdp';
import Article from '../Article/Article';

import labels from '../../labels/labels.json';
import productInfo from '../../productData/productInfo.json';
import articleContent from '../../labels/articles/consigliColtivazione.md';

export default {
  component: Page,
  title: 'Page',
};

const plp = <Plp {...labels} {...productInfo} />;
const pdp = <Pdp {...labels} {...productInfo} />;
const article = <Article {...labels} articleContent={articleContent} />;


export const PagePlp = () => <Page {...labels}>{plp}</Page>;
export const PagePdp = () => <Page {...labels}>{pdp}</Page>;
export const PageArticle = () => <Page {...labels}>{article}</Page>;
