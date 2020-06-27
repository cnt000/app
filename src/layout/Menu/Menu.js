import React from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen }) => (
  <Router>
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
          <Link to="/">Prodotti speciali</Link>
        </li>
        <li>
          <Link to="/">Consigli per coltivare</Link>
        </li>
        <li>
          <a href="#">Ordini</a>
        </li>
        <li>
          <a href="#">Foto-Show</a>
        </li>
        <li>
          <a href="#">E-mail</a>
        </li>
      </ul>
    </nav>
    <div className={styles.overlay}></div>
  </Router>
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

export default Menu;
