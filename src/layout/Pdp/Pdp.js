import React from 'react';
import styles from './Pdp.module.css';

const Pdp = ({ productName, productImage, vaseDiameter, price, addToCart }) => (
  <main classNameName={styles.pdpContent} role="main">
    <div className={styles.header}></div>
    <div className={styles.mainImage}>
      <img src={productImage} alt={productName} />
    </div>
    <div className={styles.productInfo}>
      <h2 className={styles.name}>{productName}</h2>
      <div className={styles.dimension}>{vaseDiameter}</div>
      <div className={styles.price}>{price}</div>
      <button className={styles.addtoCart}>{addToCart}</button>
    </div>
  </main>
);

export default Pdp;