import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../Labels';
import { getImageUrl } from '../../utils/images';
import { cleanProductName } from '../../utils/clean';
import styles from './Pdp.module.css';

const Pdp = ({ name, image, size, price }) => {
  const { addToCart } = useContext(LabelsContext);
  const imageUrl = getImageUrl(image.split('/').pop(), 500);
  const productName = cleanProductName(name);
  return (
    <main className={styles.pdpContent} role="main">
      <div className={styles.header}></div>
      <div className={styles.mainImage}>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className={styles.product}>
        <h2 className={styles.name}>{productName}</h2>
        <div className={styles.dimension}>{cleanProductName(size)}</div>
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
