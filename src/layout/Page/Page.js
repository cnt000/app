import React, { useState } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';

const Page = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.pageLayout}>
      <Header setMenuOpen={() => setMenuOpen(true)} />
      <Menu
        isOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(false)}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
