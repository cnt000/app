import React, { useState } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';

const Page = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.pageLayout}>
      <Header {...props} setMenuOpen={() => setMenuOpen(true)} />
      <Menu isOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} Link={props.Link}/>
      {props.children}
      <Footer {...props} />
    </div>
  );
};

export default Page;
