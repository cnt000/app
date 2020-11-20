import React from 'react';
import { conf } from '../../conf/url';
import useFetch from 'use-http';
import Pagination from '../Pagination/Pagination';

const PaginationFetch = ({ page, isSearch, searchQuery }) => {
  const url = `${conf.apiEndpoint}/api/v1/total-pages`;
  const { loading, data = 0, cache } = useFetch(url, { persist: true }, []);
  return (
    <>
      {loading && 'Fetching...'}
      {!loading && (
        <Pagination
          isSearch={isSearch}
          page={page}
          searchQuery={searchQuery}
          totalPages={Math.ceil(data / 24)}
        />
      )}
    </>
  );
};

export default PaginationFetch;
