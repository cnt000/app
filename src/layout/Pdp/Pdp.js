import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../../features/labels';
import styles from './Pdp.module.css';

const Pdp = ({ productName, productImage, vaseDiameter, price }) => {
  const { addToCart } = useContext(LabelsContext);

  return (
    <main className={styles.pdpContent} role="main">
      <div className={styles.header}></div>
      <div className={styles.mainImage}>
        <img src={productImage} alt={productName} />
      </div>
      <div className={styles.product}>
        <h2 className={styles.name}>{productName}</h2>
        <div className={styles.dimension}>{vaseDiameter}</div>
        <div className={styles.price}>{price}</div>
        <button className={styles.addToCart}>{addToCart}</button>
      </div>
    </main>
  );
};

Pdp.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  vaseDiameter: PropTypes.string,
  price: PropTypes.string,
  addToCart: PropTypes.string,
};

export default Pdp;
