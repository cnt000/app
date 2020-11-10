import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import listUnit from '../../state';
import { getImageUrlCropped } from '../../utils/images';
import styles from './MiniCart.module.css';

function handleAdd({ currentTarget }) {
  listUnit.push(JSON.parse(currentTarget.dataset.product));
}

function handleRemove({ currentTarget }) {
  listUnit.remove(currentTarget.dataset.index);
}

const imageUrl = (image) => image.split('/').pop().replace(' ', '%20');

const MiniCartProduct = ({ product, i }) => (
  <div className={styles.product}>
    <img
      src={getImageUrlCropped(imageUrl(product.image), 80)}
      alt={product.name}
    />
    <div className={styles.productDescription}>
      <div className={styles.productName}>{product.name}</div>
      <div>
        {product.size} {product.price} €
      </div>
      <div className={styles.qty}>Qty. 1</div>
      <button
        data-product={JSON.stringify(product)}
        data-index={i}
        onClick={handleAdd}
      >
        +
      </button>
      <button
        data-product={JSON.stringify(product)}
        data-index={i}
        onClick={handleRemove}
      >
        -
      </button>
    </div>
  </div>
);

const MiniCart = ({ isOpen, setCartOpen }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listUnit.subscribe((value) => {
      setProducts(value);
    });
    return () => listUnit.clearPersistedValue();
  });

  return (
    <>
      <nav className={`${styles.minicart} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <button className={styles.close} onClick={setCartOpen}>
            chiudi il menu
          </button>
        </div>
        {products.length === 0 && (
          <div className={styles.contentEmpty}>Nessun prodotto nel carrello</div>
        )}
        {products.length > 0 && (
          <>
            <div className={styles.content}>Prodotti nel tuo carrello:</div>
            <ul className={styles.productList}>
              {products.length > 0 &&
                products.map((product, i) => (
                  <li key={`${i}_${product.name}`} className={styles.listItem}>
                    <MiniCartProduct product={product} i={i} />
                  </li>
                ))}
            </ul>
          </>
        )}
      </nav>
      <div className={styles.overlay} onClick={setCartOpen}></div>
    </>
  );
};

MiniCart.propTypes = {
  isOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
};

export default MiniCart;
