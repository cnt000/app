import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/logo.png';
import styles from './Header.module.css';

const Header = ({
  openMenuLabel,
  title,
  titleDescription,
  goToCartLabel,
  setMenuOpen,
}) => {
  return (
    <header className={styles.header}>
      <div>
        <button className={styles.burger} onClick={setMenuOpen}>
          {openMenuLabel}
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="pungilandia logo" />
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{titleDescription}</p>
        </div>
      </div>
      <div>
        <button className={styles.cart}>{goToCartLabel}</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  openMenuLabel: PropTypes.string,
  title: PropTypes.string,
  titleDescription: PropTypes.string,
  goToCartLabel: PropTypes.string,
  setMenuOpen: PropTypes.func,
};

export default Header;
