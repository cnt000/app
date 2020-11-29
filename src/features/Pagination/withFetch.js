import React from 'react';
import { useParams } from 'react-router-dom';
import { conf } from '../../conf/url';
import { useQuery } from '../../hook/useQuery';
import useFetch from 'use-http';

const withFetch = (Component) => ({ children, ...props }) => {
  const { id, q } = useParams();
  const isSearch = q !== '';
  const query = useQuery();
  const searchQuery = query.get('q');
  const searchQueryWithQs = `?q=${searchQuery}`;
  const url = `${conf.apiEndpoint}${conf.totalProductsUrl}${
    searchQuery ? searchQueryWithQs : ''
  }`;
  const page = id ? Math.max(id - 1, 0) : 0;
  const { loading, data = 0 } = useFetch(url, { persist: true }, []);
  const totalPages = Math.ceil(data / 24);
  return (
    <>
      {loading && 'Fetching...'}
      {!loading && (
        <Component
          isSearch={isSearch}
          page={page}
          searchQuery={searchQuery}
          totalPages={totalPages}
        >
          {children}
        </Component>
      )}
    </>
  );
};

export default withFetch;
