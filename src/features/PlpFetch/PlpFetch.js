import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

import Plp from '../Plp/Plp';

const PlpFetch = () => {
  const { id } = useParams();
  const page = id ? Math.max(id - 1, 0) : 0;
  const url = `${conf.apiEndpoint}${conf.plpUrl}${page}`;
  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [id]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Plp products={data} page={page} />}
    </>
  );
};

export default PlpFetch;
