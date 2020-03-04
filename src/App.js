import React from 'react';
import { Counter } from './features/counter/Counter';
import Product from './features/product/Product';
import ProductList from './features/product-list/ProductList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <div>
        <Product />
      </div>
      <br />
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
