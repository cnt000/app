import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../layout/Home/Home';
import Page from '../../layout/Page/Page';
import PlpFetch from '../../features/PlpFetch/PlpFetch';
import PdpFetch from '../../features/PdpFetch/PdpFetch';
import Article from '../../features/Article/Article';
import articleContent from '../../data/articles/consigliColtivazione.md';
import { withRouter } from './withRouter';

const article = <Article articleContent={articleContent} />;
const home = <Home />;

const Router = () => (
  <>
    <Route path="/plp/:id">
      <Page children={<PlpFetch />} />
    </Route>
    <Route path="/pdp/:id">
      <Page children={<PdpFetch />} />
    </Route>
    <Route path="/article/:id">
      <Page>{article}</Page>
    </Route>
    <Route path="/">
      <Page>{home}</Page>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </>
);

export default withRouter(Router);
