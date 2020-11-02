import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

import Plp from '../Plp/Plp';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PlpFetchSearch = () => {
  const { id } = useParams();
  const page = id ? Math.max(id - 1, 0) : 0;
  const query = useQuery();
  const searchQuery = query.get('q');
  const url = `${conf.apiEndpoint}${conf.plpUrl.slice(0, -1)}/${page}/24?q=${searchQuery}`;
  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [url]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Plp products={data} page={page} isSearch searchQuery={searchQuery} />}
    </>
  );
};

export default PlpFetchSearch;
