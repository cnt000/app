import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../Labels';
import { boolUnit, productAdded, listUnit } from '../../state';
import { getImageUrlCropped } from '../../utils/images';
import styles from './Product.module.css';

const imageUrl = (image) => image.split('/').pop().replace(' ', '%20');

const Product = ({ addToCartLink, i, image, name, price }) => {
  // outerWitdh / 2
  // se > 375 outerWidth / 3
  // se > 768 outerWidth / 4
  // se > 1024 outerWidth - 190 / 4
  const { addToCart } = useContext(LabelsContext);
  const itemLink = `/pdp/${addToCartLink.split('=')[2].split('&')[0]}`;

  const itemImage = (width) => getImageUrlCropped(imageUrl(image), width);

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
          <img
            className={styles.image}
            src={itemImage(300)}
            srcSet={`${itemImage(200)} 200w,
              ${itemImage(256)} 256w,
              ${itemImage(450)} 450w,
              ${itemImage(650)} 580w,
              ${itemImage(650)} 660w`}
            alt={name}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
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
