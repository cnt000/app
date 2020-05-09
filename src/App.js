import React from 'react';
import { Counter } from './features/counter/Counter';
import Product from './features/product/Product';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Menu from './layout/Menu/Menu';
import ProductList from './features/product-list/ProductList';

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
    <div>Pungilandia Test App</div>
    <Header />
    <Menu />
    <Counter />
    <div>
      <Product />
    </div>
    <br />
    <div>
      <ProductList />
    </div>
    <Footer />
  </div>
);

export default App;
