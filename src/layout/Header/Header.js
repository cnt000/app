import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import LabelsContext from '../../features/Labels';
import logo from '../../images/logo.png';
import styles from './Header.module.css';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Header = ({ setMenuOpen, setCartOpen }) => {
  const { openMenuLabel, title, titleDescription, goToCartLabel } = useContext(
    LabelsContext,
  );
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  return (
    <header className={styles.header}>
      <div>
        <button className={styles.burger} onClick={setMenuOpen}>
          {openMenuLabel}
        </button>
      </div>
      <ConditionalWrapper
        condition={!isHomepage}
        wrapper={(children) => <Link className={styles.logoLink} to="/">{children}</Link>}
      >
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="pungilandia logo" />
          </div>
          <div className={styles.title}>
            <h1>{title}</h1>
            <p>{titleDescription}</p>
          </div>
        </div>
      </ConditionalWrapper>
      <div>
        <button className={styles.cart} onClick={setCartOpen}>
          {goToCartLabel}
        </button>
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
