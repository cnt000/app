import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../../Labels';
import { boolUnit, productAdded, listUnit } from '../../../state';
import { imageUrl } from '../../../utils/images';
import styles from './Product.module.css';
import PictureTagProduct from '../PictureTagProduct/PictureTagProduct';

const Product = ({ addToCartLink, i, image, name, price }) => {
  // outerWitdh / 2
  // se > 375 outerWidth / 3
  // se > 768 outerWidth / 4
  // se > 1024 outerWidth - 190 / 4
  const { addToCart } = useContext(LabelsContext);
  const itemLink = `/pdp/${addToCartLink.split('=')[2].split('&')[0]}`;

  function handleAdd(product) {
    listUnit.push(product);
    boolUnit.dispatch(true);
    productAdded.dispatch(true);
    setTimeout(() => boolUnit.dispatch(false), 2000);
  }

  return (
    <article key={`${name}_${i}`} className={styles.product}>
      <Link to={itemLink}>
        <div className={styles.imageContainer}>
          <PictureTagProduct
            className={styles.image}
            alt={name}
            image={imageUrl(image)}
          />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.price}>€ {price}</div>
      </Link>
      <button
        className={styles.addToCart}
        onClick={(e) => handleAdd({ addToCartLink, i, image, name, price })}
      >
        {addToCart}
      </button>
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

export default Product;
