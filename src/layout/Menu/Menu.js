import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LabelsContext from '../../features/labels';
import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen, Link }) => {
  const {
    menuChiSiamo,
    menuListaPiante,
    menuNovita,
    menuProdottiSpeciali,
    menuConsigliPerColtivare,
    menuOrdini,
    menuFotoShow,
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
            <Link to="/pdp/768">{menuNovita}</Link>
          </li>
          <li>
            <Link to="/article">{menuProdottiSpeciali}</Link>
          </li>
          <li>
            <Link to="/plp/2">{menuConsigliPerColtivare}</Link>
          </li>
          <li>
            <Link to="/plp/3">{menuOrdini}</Link>
          </li>
          <li>
            <Link to="/plp/11">{menuFotoShow}</Link>
          </li>
          <li>
            <Link to="/plp/222">{menuEmail}</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.overlay}></div>
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

export default Menu;
