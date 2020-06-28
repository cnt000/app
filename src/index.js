import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './layout/Home/Home';
import Page from './layout/Page/Page';
import Plp from './layout/Plp/Plp';
import Pdp from './layout/Pdp/Pdp';
import Article from './layout/Article/Article';
import store from './store';
import * as serviceWorker from './serviceWorker';

import labels from './data/labels/labels.json';
import product from './data/products/clavifolius.json';
import articleContent from './data/articles/consigliColtivazione.md';

import './index.css';

const plp = <Plp {...labels} {...product} />;
const pdp = <Pdp {...labels} {...product} />;
const article = <Article {...labels} articleContent={articleContent} />;
const home = <Home {...labels} />;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/plp">
          <Page {...labels} Link={Link}>
            {plp}
          </Page>
          ;
        </Route>
        <Route path="/pdp">
          <Page {...labels} Link={Link}>
            {pdp}
          </Page>
        </Route>
        <Route path="/article">
          <Page {...labels} Link={Link}>
            {article}
          </Page>
        </Route>
        <Route path="/">
          <Page {...labels} Link={Link}>
            {home}
          </Page>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
