import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../Labels';
import styles from './Pdp.module.css';

const Pdp = ({ name, image, size, price }) => {
  const { addToCart } = useContext(LabelsContext);
  const imageFullUrl = `http://www.pungilandia.com/php/${image}`;
  return (
    <main className={styles.pdpContent} role="main">
      <div className={styles.header}></div>
      <div className={styles.mainImage}>
        <img src={imageFullUrl} alt={name} />
      </div>
      <div className={styles.product}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.dimension}>{size}</div>
        <div className={styles.price}>{price} €</div>
        <button className={styles.addToCart}>{addToCart}</button>
      </div>
    </main>
  );
};

Pdp.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  addToCart: PropTypes.string,
};

export default Pdp;
