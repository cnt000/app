import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../Labels';
import { getImageUrlCropped } from '../../utils/images';
import { cleanProductName } from '../../utils/clean';
import CercaPiante from '../CercaPiante/CercaPiante';
import styles from './Plp.module.css';

const Product = ({ href, i, image, name, price }) => {
  const { addToCart } = useContext(LabelsContext);
  const itemLink = `/pdp/${href.split('=')[1]}`;
  const itemImage = getImageUrlCropped(image.split('/').pop(), 300);
  const productName = cleanProductName(name);
  return (
    <article key={`${productName}_${i}`} className={styles.product}>
      <Link to={itemLink} className={styles.imageContainer}>
        <img
          className={styles.image}
          src={itemImage}
          alt={productName}
          loading="lazy"
        />
        <h1 className={styles.name}>{productName}</h1>
        <div>{price}</div>
      </Link>
      <button className={styles.addToCart}>{addToCart}</button>
    </article>
  );
};

Product.propTypes = {
  i: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  Link: PropTypes.object,
};

const Plp = ({ products, page }) => {
  const hasResults = !products.error && !products.code;

  return (
    <main className={styles.plpContent} role="main">
      <div className={styles.pageHeader}>
        <div className={styles.left}>
          <h2 className={styles.title}>Le nostre piante</h2>
          <span className={styles.lastmodified}>02/04/2020</span>
        </div>
        <CercaPiante />
      </div>
      <div className={styles.products}>
        {!hasResults && 'Nessun Risultato...'}
        {hasResults &&
          products.map((product, i) => Product({ ...product, i }))}
      </div>
      {hasResults && <Link to={`/plp/${page + 2}`}>Next page ({page + 2})</Link>}
    </main>
  );
};

Plp.propTypes = {
  products: PropTypes.array,
  Link: PropTypes.object,
};

export default Plp;
