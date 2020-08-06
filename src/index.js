import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './layout/Home/Home';
import Page from './layout/Page/Page';
import PlpFetch from './features/PlpFetch/PlpFetch';
import PdpFetch from './features/PdpFetch/PdpFetch';
import Article from './features/Article/Article';
import store from './store';
import LabelsContext from './features/Labels';

import labels from './data/labels/labels.json';
import articleContent from './data/articles/consigliColtivazione.md';
import * as serviceWorker from './serviceWorker';
import './index.css';

const article = <Article articleContent={articleContent} />;
const home = <Home />;

ReactDOM.render(
  <Provider store={store}>
    <LabelsContext.Provider value={labels}>
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </LabelsContext.Provider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
