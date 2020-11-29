import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

const withFetch = (Component) => ({ children, ...props }) => {
  const { id } = useParams();
  const page = id ? Math.max(id, 0) : 0;
  const url = `${conf.apiEndpoint}${conf.pdpUrl}${page}`;
  const { loading, data = {} } = useFetch(url, { cacheLife: 1 }, [id]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Component {...data}>{children}</Component>}
    </>
  );
};

export default withFetch;
