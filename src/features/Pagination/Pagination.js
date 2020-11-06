import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.css';

const PaginationFetch = () => {
  // const url = ``;
  // const { loading, data = {} } = useFetch(url, { cacheLife: 1 }, [id]);
  // return (
  //   <>
  //     {loading && 'Loading...'}
  //     {!loading && <Pagination isSearch={isSearch} page={page} searchQuery={'searchQuery} />}
  //   </>
  // );
}

const Pagination = ({ page, isSearch, searchQuery }) => {
  const totalPages = 5;
  const hasPages = page < totalPages; // TODO
  const prevPageLink = isSearch
    ? `/search/${page}?q=${searchQuery}`
    : `/plp/${page}`;
  const nextPageLink = isSearch
    ? `/search/${page + 2}?q=${searchQuery}`
    : `/plp/${page + 2}`;
  return (
    hasPages && (
      <div className={styles.pagination}>
        {page > 0 && (
          <span>
            <Link to={prevPageLink}>Pagina prec.({page})</Link>
          </span>
        )}
        <span className={styles.page}>Pagina {page + 1}</span>
        {page < totalPages - 1 && (
          <span>
            <Link to={nextPageLink}>Pagina succ.({page + 2})</Link>
          </span>
        )}
      </div>
    )
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  isSearch: PropTypes.bool,
  searchQuery: PropTypes.string,
};

export default Pagination;
