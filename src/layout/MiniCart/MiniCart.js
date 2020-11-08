import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelsContext from '../../features/Labels';
import styles from './MiniCart.module.css';

const MiniCart = ({ isOpen, setCartOpen }) => (
  <>
    <nav className={`${styles.minicart} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <button className={styles.close} onClick={setCartOpen}>
          chiudi il menu
        </button>
      </div>
      <div className={styles.content}>
        Nessun prodotto nel carrello
      </div>
    </nav>
    <div className={styles.overlay} onClick={setCartOpen}></div>
  </>
);

MiniCart.propTypes = {
  isOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
};

export default MiniCart;
