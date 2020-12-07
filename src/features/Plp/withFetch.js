import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';
import { useQuery } from '../../hook/useQuery';

const withFetch = (Component) => ({ children, ...props }) => {
  const { id } = useParams();
  const page = id ? Math.max(id - 1, 0) : 0;
  const query = useQuery();
  const searchQuery = query.get('q');
  const urlProducts = `${conf.apiEndpoint}${conf.plpUrl}${page}/24`;
  const urlSearchProducts = `${conf.apiEndpoint}${conf.plpUrl.slice(
    0,
    -1,
  )}/${page}/24?q=${searchQuery}`;
  const url = searchQuery ? urlSearchProducts : urlProducts;

  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [url]);

  return (
    <>
      {loading && 'Loading...'}
      {!loading && (
        <Component
          products={data}
          page={page}
          searchQuery={searchQuery}
          {...props}
        >
          {children}
        </Component>
      )}
    </>
  );
};

export default withFetch;
