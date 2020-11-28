import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

export const withFetch = (Component) => ({ children, ...props }) => {
  const { id } = useParams();
  const page = id ? Math.max(id - 1, 0) : 0;
  const url = `${conf.apiEndpoint}${conf.plpUrl}${page}/24`;
  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [id]);

  return (
    <>
      {loading && 'Loading...'}
      {!loading && (
        <Component products={data} page={page} {...props}>
          {children}
        </Component>
      )}
    </>
  );
  ;
};
