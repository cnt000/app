import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PaginationFetch from '../PaginationFetch/PaginationFetch';
import Product from '../Product/Product';
import EmptyResults from '../EmptyResults/EmptyResults';
import CercaPiante from '../CercaPiante/CercaPiante';
import styles from './Plp.module.css';

const Plp = ({ products, page, isSearch, searchQuery }) => {
  const hasResults = !products.error && !products.code && products.message !== 'not found';

  return (
    <main className={styles.plpContent} role="main">
      <div className={styles.pageHeader}>
        <div className={styles.left}>
          <h2 className={styles.title}>Le nostre piante</h2>
        </div>
        <CercaPiante />
      </div>
      <div className={styles.products}>
        {!hasResults && <EmptyResults />}
        {hasResults && products.map((product, i) => Product({ ...product, i }))}
      </div>
      {<PaginationFetch isSearch={isSearch} page={page} searchQuery={searchQuery} />}
    </main>
  );
};

Plp.propTypes = {
  products: PropTypes.array,
  Link: PropTypes.object,
};

export default Plp;
