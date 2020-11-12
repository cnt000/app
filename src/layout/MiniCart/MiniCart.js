import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { listUnit, boolUnit } from '../../state';
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
  //todo: scrollbar e messaggio di aggiunta,
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
      <div>
        <button
          data-product={JSON.stringify(product)}
          data-index={i}
          onClick={handleAdd}
          className={styles.addButton}
        >
          +
        </button>
        <button
          data-product={JSON.stringify(product)}
          data-index={i}
          onClick={handleRemove}
          className={styles.removeButton}
        >
          -
        </button>
      </div>
    </div>
  </div>
);

const MiniCart = ({ setCartOpen }) => {
  const [products, setProducts] = useState([]);
  const [isMiniCartOpen, setMCO] = useState(false);
  const [message, setAddMessage] = useState('');
  const history = useHistory();

  function goToCart() {
    history.push('/cart');
  }

  useEffect(() => {
    listUnit.subscribe((value) => {
      setProducts(value);
      setAddMessage('Prodotto aggiunto al carrello');
      // setTimeout(() => setAddMessage(''), 2000);
      console.log('subscribe ' + value);
    });
  });

  useEffect(() => {
    boolUnit.subscribe((value) => {
      setMCO(value);
    });
  });

  return (
    <>
      <nav
        className={`${styles.minicart} ${isMiniCartOpen ? styles.open : ''}`}
      >
        <div className={styles.header}>
          <button className={styles.close} onClick={setCartOpen}>
            chiudi il menu
          </button>
        </div>
        {products.length === 0 && (
          <div className={styles.contentEmpty}>
            Nessun prodotto nel carrello
          </div>
        )}
        {products.length > 0 && (
          <>
            <div className={styles.content}>Prodotti nel tuo carrello:</div>
            <ul className={styles.productList}>
              {products.length > 0 &&
                products.map((product, i) => (
                  <li key={`${i}_${product.name}`} className={styles.listItem}>
                    {i === products.length - 1 && (
                      <div className={styles.addedMessage}>{message}</div>
                    )}
                    <MiniCartProduct product={product} i={i} />
                  </li>
                ))}
            </ul>
            {products.length > 0 && (
              <>
                <div className={styles.content}>
                  Totale:{' '}
                  {products.reduce(
                    (acc, curr) => parseInt(curr.price) + acc,
                    0,
                  )}{' '}
                  €
                </div>
                <div className={styles.goToCartWrapper}>
                  <button onClick={goToCart} className={styles.goToCart}>
                    Procedi all'ordine
                  </button>
                </div>
              </>
            )}
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
