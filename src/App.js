import React from 'react';
import { Counter } from './features/counter/Counter';
import Product from './features/product/Product';
import ProductList from './features/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test App</h1>
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
