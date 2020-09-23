import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

import Plp from '../Plp/Plp';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PlpFetchSearch = () => {
  const query = useQuery();
  const page = 0;
  const url = `${conf.apiEndpoint}${conf.plpUrl.slice(0, -1)}?q=${query.get('q')}`;
  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [url]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Plp products={data} page={page} isSearch/>}
    </>
  );
};

export default PlpFetchSearch;
