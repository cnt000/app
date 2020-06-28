import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Page from './Page';
import Plp from '../Plp/Plp';
import Pdp from '../Pdp/Pdp';
import Article from '../Article/Article';
import Home from '../Home/Home';

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
const home = <Home {...labels} articleContent={articleContent} />;

export const PagePlp = () => (
  <Router>
    <Page {...labels} Link={Link}>
      {plp}
    </Page>
  </Router>
);
export const PagePdp = () => (
  <Router>
    <Page {...labels} Link={Link}>
      {pdp}
    </Page>
  </Router>
);
export const PageArticle = () => (
  <Router>
    <Page {...labels} Link={Link}>
      {article}
    </Page>
  </Router>
);
export const PageHome = () => (
  <Router>
    <Page {...labels} Link={Link}>
      {home}
    </Page>
  </Router>
);
