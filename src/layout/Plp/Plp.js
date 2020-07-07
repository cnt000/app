import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../../features/labels';
import styles from './Plp.module.css';

const Product = ({ i, productName, productImage, price }) => {
  const { addToCart } = useContext(LabelsContext);
  return (
    <article key={`${productName}_${i}`} className={styles.product}>
      <a href="/item" className={styles.imageContainer}>
        <img className={styles.image} src={productImage} alt={productName} />
        <h1 className={styles.name}>{productName}</h1>
        <div>{price}</div>
      </a>
      <button className={styles.addToCart}>{addToCart}</button>
    </article>
  );
};

Product.propTypes = {
  i: PropTypes.number,
  productName: PropTypes.string,
  productImage: PropTypes.string,
  price: PropTypes.string,
  addToCart: PropTypes.string,
};

const Plp = ({ productName, productImage, price }) => {
  const { searchPlants, searchPlantsImage } = useContext(LabelsContext);
  return (
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
          .map((_, i) => Product({ i, productName, productImage, price }))}
      </div>
    </main>
  );
};

Plp.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  price: PropTypes.string,
  addToCart: PropTypes.string,
  searchPlants: PropTypes.string,
  searchPlantsImage: PropTypes.string,
};

export default Plp;
