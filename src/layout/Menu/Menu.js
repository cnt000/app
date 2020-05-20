import React from 'react';
import styles from './Menu.module.css';

const Menu = () => (
  <>
    <nav className={styles.menu}>
      <div className={styles.header}>
        <button className={styles.close}>chiudi il menu</button>
      </div>
      <ul className={styles.entries}>
        <li>
          <a href="https://www.bitdegree.org/tag/gamified/">Chi siamo</a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/tutorials/">Lista piante</a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/course/learn-solidity-space-doggos/">
            Novità
          </a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/tag/game-dev/">
            Prodotti speciali
          </a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/tag/gamified/">
            Consigli per coltivare
          </a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/tutorials/">Ordini</a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/course/learn-solidity-space-doggos/">
            Foto-Show
          </a>
        </li>
        <li>
          <a href="https://www.bitdegree.org/tag/game-dev/">E-mail</a>
        </li>
      </ul>
    </nav>
    <div className={styles.overlay}></div>
  </>
);

export default Menu;
