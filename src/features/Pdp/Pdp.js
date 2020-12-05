import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../Labels';
import { getImageUrl } from '../../utils/images';
import withFetch from './withFetch';
import styles from './Pdp.module.css';

const Pdp = ({ name, image, size, price }) => {
  const { addToCart } = useContext(LabelsContext);
  const imageUrl = getImageUrl(image.split('/').pop(), 800);
  return (
    <main className={styles.pdpContent} role="main">
      <div className={styles.header}></div>
      <div className={styles.mainImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.product}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.infoBox}>
          <div className={styles.dimension}>Diametro vaso: {size}</div>
          <div className={styles.price}>Prezzo: {price} €</div>
        </div>
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

export default withFetch(Pdp);
