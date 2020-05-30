import React from 'react';
import styles from './Pdp.module.css';

const Pdp = ({ productName, productImage, vaseDiameter, price, addToCart}) => (
  <main classNameName={styles.pdpContent} role="main">
    <div className={styles.header}></div>
    <div className={styles.mainImage}>
      <img
        src="http://www.pungilandia.com/php/images/hi/adromischus-clavifolius.jpg"
        alt="Adromischus  clavifolius"
      />
    </div>
    <div className={styles.productInfo}>
      <h2 className={styles.name}>Adromischus clavifolius</h2>
      <div className={styles.dimension}>Vaso 24cm</div>
      <div className={styles.price}>Prezzo: € 9,00</div>
      <button className={styles.addtoCart}>{addToCart}</button>
    </div>
  </main>
);

export default Pdp;
