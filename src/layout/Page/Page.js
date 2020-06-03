import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Plp from '../Plp/Plp';
import Footer from '../Footer/Footer';
import productInfo from '../../productData/productInfo.json';
import styles from './Page.module.css';

const Page = (labels) => (
  <div className={styles.pageLayout}>
    <Header {...labels} />
    <Menu />
    <Plp {...labels} {...productInfo} />
    <Footer {...labels} />
  </div>
);

export default Page;
