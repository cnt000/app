import React from 'react';
import ReactDOM from 'react-dom';

import router from './features/Router';
import { withLabels } from './features/Labels/withLabels';
import * as serviceWorker from './serviceWorker';
import { attachSrcSetDebug } from './utils/attachSrcSetDebug';
import './index.css';

const RouterWithLabels = withLabels(router);

ReactDOM.render(
  <RouterWithLabels />,
  document.getElementById('root'),
);

if (/debug=1/.test(document.location.search)) {
  setTimeout(() => attachSrcSetDebug('img'), 1500);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
