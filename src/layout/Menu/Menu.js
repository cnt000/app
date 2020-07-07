import React from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen, Link }) => (
  <>
    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <button className={styles.close} onClick={setMenuOpen}>
          chiudi il menu
        </button>
      </div>
      <ul className={styles.entries}>
        <li>
          <Link to="/">Chi siamo</Link>
        </li>
        <li>
          <Link to="/plp">Lista piante</Link>
        </li>
        <li>
          <Link to="/pdp">Novità</Link>
        </li>
        <li>
          <Link to="/article">Prodotti speciali</Link>
        </li>
        <li>
          <Link to="/test2">Consigli per coltivare</Link>
        </li>
        <li>
          <Link to="/test3">Ordini</Link>
        </li>
        <li>
          <Link to="/test4">Foto-Show</Link>
        </li>
        <li>
          <Link to="/test5">E-mail</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.overlay}></div>
  </>
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

export default Menu;
