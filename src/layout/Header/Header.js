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
        <button
          className="dn-ns button-reset::-moz-focus-inner input-reset overflow-hidden aspect-ratio ml2 .pointer:hover bg-transparent pt4"
          onClick={setMenuOpen}
        >
          {openMenuLabel}
        </button>
      </div>
      <div className="tc center flex dark-red">
        <div className="pt1">
          <img src={logo} alt="pungilandia logo" className="w-auto h3 h4-ns" />
        </div>
        <div className="pl2 pr2 pt0 pb0 lh-solid">
          <h1 className="f1 f-5-ns">{title}</h1>
          <p className="f4 f1-ns">{titleDescription}</p>
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
