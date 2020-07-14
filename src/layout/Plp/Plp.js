import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../../features/labels';
import styles from './Plp.module.css';

const Product = ({ href, i, image, name, price, Link }) => {
  const { addToCart } = useContext(LabelsContext);
  const itemLink = `/pdp/${href.split('=')[1]}`
  return (
    <article key={`${name}_${i}`} className={styles.product}>
      <Link to={itemLink} className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image.replace('..', 'http://www.pungilandia.com')}
          alt={name}
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
  Link: PropTypes.object
};

const Plp = ({ products, Link }) => {
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
        {products.map((product, i) => Product({ ...product, i, Link }))}
      </div>
    </main>
  );
};

Plp.propTypes = {
  products: PropTypes.array,
  Link: PropTypes.object
};

export default Plp;
