import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../../features/Labels';
import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen }) => {
  const {
    home,
    menuListaPiante,
    menuConsigliPerColtivare,
    menuOrdini,
    menuContatti,
  } = useContext(LabelsContext);
  return (
    <>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <button className={styles.close} onClick={setMenuOpen}>
            chiudi il menu
          </button>
        </div>
        <ul className={styles.entries} onClick={(e) => setMenuOpen(false)}>
          <li>
            <Link to="/">{home}</Link>
          </li>
          <li>
            <Link to="/plp/1">{menuListaPiante}</Link>
          </li>
          <li>
            <Link to="/consigli">{menuConsigliPerColtivare}</Link>
          </li>
          <li>
            <Link to="/ordini">{menuOrdini}</Link>
          </li>
          <li>
            <Link to="/contatti">{menuContatti}</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.overlay} onClick={setMenuOpen}></div>
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

export default Menu;
