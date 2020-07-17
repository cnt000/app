import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page';
import Plp from '../../features/Plp/Plp';
import Pdp from '../../features/Pdp/Pdp';
import Article from '../../features/Article/Article';
import Home from '../../layout/Home/Home';

import LabelsContext from '../../features/Labels';
import labels from '../../data/labels/labels.json';
import product from '../../data/products/clavifolius.json';
import articleContent from '../../data/articles/consigliColtivazione.md';

export default {
  component: Page,
  title: 'Page',
};

const plp = <Plp {...product} />;
const pdp = <Pdp {...product} />;
const article = <Article articleContent={articleContent} />;
const home = <Home />;

export const PagePlp = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Page>{plp}</Page>
    </Router>
  </LabelsContext.Provider>
);

export const PagePdp = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Page {...labels}>{pdp}</Page>
    </Router>
  </LabelsContext.Provider>
);

export const PageArticle = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Page {...labels}>{article}</Page>
    </Router>
  </LabelsContext.Provider>
);

export const PageHome = () => (
  <LabelsContext.Provider value={labels}>
    <Router>
      <Page {...labels}>{home}</Page>
    </Router>
  </LabelsContext.Provider>
);
