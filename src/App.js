import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';
import Plp from './layout/Plp/Plp';
import Pdp from './layout/Pdp/Pdp';
import Article from './layout/Article/Article';
import Footer from './layout/Footer/Footer';

import './App.scss';

const labels = {
  openMenuLabel: 'apri il menu',
  title: 'Pungilandia',
  titleDescription: 'Piante grasse, strane ed insolite',
  goToCartLabel: 'vai al carrello',
};

const App = () => (
  <div className="App">
    <Header {...labels} />
    <Menu />
    <Plp />
    <Pdp />
    <Article />
    <Footer />
    <Counter />
  </div>
);

export default App;
