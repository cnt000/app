import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ isOpen, setMenuOpen }) => (
  <>
    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <button className={styles.close} onClick={(setMenuOpen)}>
          chiudi il menu
        </button>
      </div>
      <ul className={styles.entries}>
        <li>
          <a href="https://www.pungilandia.com">Chi siamo</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Lista piante</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Novità</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Prodotti speciali</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Consigli per coltivare</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Ordini</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">Foto-Show</a>
        </li>
        <li>
          <a href="https://www.pungilandia.com">E-mail</a>
        </li>
      </ul>
    </nav>
    <div className={styles.overlay}></div>
  </>
);

export default Menu;
