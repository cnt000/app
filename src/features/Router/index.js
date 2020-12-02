import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../layout/Home/Home';
import Page from '../../layout/Page/Page';
import Plp from '../../features/Plp/Plp';
import Pdp from '../../features/Pdp/Pdp';
import Article from '../../features/Article/Article';
import articleContent from '../../data/articles/consigliColtivazione.md';
import { withRouter } from './withRouter';

const article = <Article articleContent={articleContent} />;
const home = <Home />;

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Page>{home}</Page>
    </Route>
    <Route exact path="/plp/:id">
      <Page children={<Plp />} />
    </Route>
    <Route path="/search/:id">
      <Page children={<Plp />} />
    </Route>
    <Route exact path="/pdp/:id">
      <Page children={<Pdp/>} />
    </Route>
    <Route exact path="/article/:id">
      <Page>{article}</Page>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default withRouter(Router);
