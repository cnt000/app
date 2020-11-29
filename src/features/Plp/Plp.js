import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import useIntersect from '../../hook/useIntersect';
import Product from '../Product/Product';
import EmptyResults from '../EmptyResults/EmptyResults';
import CercaPiante from '../CercaPiante/CercaPiante';
import MyErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import withFetch from './withFetch';
import Pagination from '../Pagination/Pagination';
import styles from './Plp.module.css';

const Plp = ({ products }) => {
  const [ref, entry] = useIntersect({
    threshold: 0.1,
  });

  const hasResults =
    !products.error && !products.code && products.message !== 'not found';

  const MemoizedPagination = React.memo(
    () =>
      entry.intersectionRatio > 0.1 && (
        <MyErrorBoundary>
          <Suspense
            fallback={<div className={styles.paginationBox}>Loading...</div>}
          >
            <Pagination />
          </Suspense>
        </MyErrorBoundary>
      ),
  );

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
      <div
        ref={ref}
        ratio={entry.intersectionRatio}
        className={styles.paginationBox}
      >
        <MemoizedPagination />
      </div>
    </main>
  );
};

Plp.propTypes = {
  products: PropTypes.array,
  Link: PropTypes.object,
};

export default withFetch(Plp);
