import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page';
import Plp from '../../features/Plp/Plp';
import Pdp from '../../features/Pdp/Pdp';
import Article from '../../features/Article/Article';
import Home from '../../layout/Home/Home';

import { withLabels } from '../../features/Labels/withLabels';
import product from '../../data/products/clavifolius.json';
import products from '../../data/products/searchpage.json';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Page,
  title: 'Page',
};

const plp = <Plp products={products} />;
const pdp = <Pdp {...product} />;
const article = <Article articleContent={articleContent} />;
const home = <Home />;

export const PagePlp = () => (
  <Router>
    <Page>{plp}</Page>
  </Router>
);

export const PagePdp = () => (
  <Router>
    <Page>{pdp}</Page>
  </Router>
);

export const PageArticle = () => (
  <Router>
    <Page>{article}</Page>
  </Router>
);

export const PageHome = () => (
  <Router>
    <Page>{home}</Page>
  </Router>
);

export const pagePlp = withLabels(PagePlp);
export const pagePdp = withLabels(PagePdp);
export const pageArticle = withLabels(PageArticle);
export const pageHome = withLabels(PageHome);
