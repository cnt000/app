import React from 'react';
import { Counter } from './features/counter/Counter';
import Product from './features/product/Product';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import ProductList from './features/product-list/ProductList';

import './App.scss';

const App = () => (
  <div className="App">
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
