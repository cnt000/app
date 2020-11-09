import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import listUnit from '../../state';
import styles from './MiniCart.module.css';

const MiniCart = ({ isOpen, setCartOpen }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listUnit.subscribe(
      value => setProducts(value)
    );
    return () => listUnit.clearPersistedValue();
  });

  function handleAdd({ currentTarget }) {
    listUnit.push(JSON.parse(currentTarget.dataset.product));
  }

  function handleRemove({ currentTarget }) {
    listUnit.remove(currentTarget.dataset.index);
  }

  return (
    <>
      <nav className={`${styles.minicart} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <button className={styles.close} onClick={setCartOpen}>
            chiudi il menu
        </button>
        </div>
        <div className={styles.content}>
          {products.length === 0 && 'Nessun prodotto nel carrello'}
          {products.length > 0 && products.map((product, i) => <li key={`${i}_${product.name}`}>
            <button data-product={JSON.stringify(product)} data-index={i} onClick={handleAdd}>+</button>
            <button data-product={JSON.stringify(product)} data-index={i} onClick={handleRemove}>-</button>
            <br />
            {product.name} {product.size} {product.image} {product.price}</li>)}
        </div>
      </nav>
      <div className={styles.overlay} onClick={setCartOpen}></div>
    </>
  )
};

MiniCart.propTypes = {
  isOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
};

export default MiniCart;
