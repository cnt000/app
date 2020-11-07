import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../../features/Labels';
import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen }) => {
  const {
    menuChiSiamo,
    menuListaPiante,
    menuProdottiSpeciali,
    menuConsigliPerColtivare,
    menuOrdini,
    menuEmail,
  } = useContext(LabelsContext);
  return (
    <>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <button className={styles.close} onClick={setMenuOpen}>
            chiudi il menu
          </button>
        </div>
        <ul className={styles.entries}>
          <li>
            <Link to="/">{menuChiSiamo}</Link>
          </li>
          <li>
            <Link to="/plp/1">{menuListaPiante}</Link>
          </li>
          <li>
            <Link to="/">{menuProdottiSpeciali}</Link>
          </li>
          <li>
            <Link to="/">{menuConsigliPerColtivare}</Link>
          </li>
          <li>
            <Link to="/">{menuOrdini}</Link>
          </li>
          <li>
            <Link to="/">{menuEmail}</Link>
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
