import React from 'react';
import styles from './Plp.module.css';

const Product = ({ i, productName, productImage, price, addToCart }) => (
  <article key={`${productName}_${i}`} className={styles.product}>
    <a href="/item" className={styles.imageContainer}>
      <img className={styles.image} src={productImage} alt={productName} />
      <h1 className={styles.name}>{productName}</h1>
      <div>{price}</div>
    </a>
    <button className={styles.addToCart}>{addToCart}</button>
  </article>
);

const Plp = ({
  productName,
  productImage,
  price,
  addToCart,
  searchPlants,
  searchPlantsImage,
}) => (
  <main className={styles.plpContent} role="main">
    <div className={styles.pageHeader}>
      <div className={styles.left}>
        <h2 className={styles.title}>Le nostre piante</h2>
        <span className={styles.lastmodified}>02/04/2020</span>
      </div>
      <div className={styles.cercapiante}>
        <a href="/search" title={searchPlants}>
          <img src={searchPlantsImage} alt={searchPlants} />
          <span>{searchPlants}</span>
        </a>
      </div>
    </div>
    <div className={styles.products}>
      {Array(12)
        .fill(' ')
        .map((_, i) => Product({ i, productName, productImage, price, addToCart }))}
    </div>
  </main>
);

export default Plp;
