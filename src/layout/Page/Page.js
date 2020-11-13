import React, { useState } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import MiniCart from '../MiniCart/MiniCart';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';
import { boolUnit, productAdded } from '../../state';

const Page = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [cartOpen, setCartOpen] = useState(false);
  const setCartOpen = (value) => {
    boolUnit.dispatch(value);
    productAdded.dispatch(false);
  }
  return (
    <div className={styles.pageLayout}>
      <Header
        setMenuOpen={() => setMenuOpen(true)}
        setCartOpen={() => setCartOpen(true)}
      />
      <Menu isOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} />
      <MiniCart setCartOpen={() => setCartOpen(false)} />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
