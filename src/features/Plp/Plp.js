import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../Labels';
import { getImageUrlCropped } from '../../utils/images';
import CercaPiante from '../CercaPiante/CercaPiante';
import styles from './Plp.module.css';

const Product = ({ addToCartLink, i, image, name, price }) => {
  const { addToCart } = useContext(LabelsContext);
  const itemLink = `/pdp/${addToCartLink.split('=')[2].split('&')[0]}`;
  const itemImage = getImageUrlCropped(image.split('/').pop(), 300);
  return (
    <article key={`${name}_${i}`} className={styles.product}>
      <Link to={itemLink} className={styles.imageContainer}>
        <img
          className={styles.image}
          src={itemImage}
          alt={name}
          loading="lazy"
        />
        <h1 className={styles.name}>{name}</h1>
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

const Plp = ({ products, page, isSearch }) => {
  const hasResults = !products.error && !products.code;
  const hasPages = page < 12 && !isSearch;

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
      {hasPages && <Link to={`/plp/${page + 2}`}>Next page ({page + 2})</Link>}
    </main>
  );
};

Plp.propTypes = {
  products: PropTypes.array,
  Link: PropTypes.object,
};

export default Plp;
