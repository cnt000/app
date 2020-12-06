import React from 'react';

import Page from './Page';
import Plp from '../../features/Plp/Plp';
import Pdp from '../../features/Pdp/Pdp';
import Article from '../../features/Article/Article';
import Home from '../../layout/Home/Home';

import { withLabels } from '../../features/Labels/withLabels';
import product from '../../data/products/clavifolius.json';
import products from '../../data/products/searchpage.json';
import articleContent from '../../data/articles/consigliColtivazione.md';
import { withRouter } from '../../features/Router/withRouter';

export default {
  component: Page,
  title: 'Page',
};

const plp = <Plp products={products} />;
const pdp = <Pdp {...product} />;
const article = <Article articleContent={articleContent} />;
const home = <Home />;

const PagePlp = () => <Page>{plp}</Page>;
const PagePdp = () => <Page>{pdp}</Page>;
const PageArticle = () => <Page>{article}</Page>;
const PageHome = () => <Page>{home}</Page>;

export const pagePlp = withLabels(withRouter(PagePlp));
export const pagePdp = withLabels(withRouter(PagePdp));
export const pageArticle = withLabels(withRouter(PageArticle));
export const pageHome = withLabels(withRouter(PageHome));
