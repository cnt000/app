import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

import Plp from '../Plp/Plp';

const PlpSearch = () => {
  const { query } = useParams();
  const page = 0;
  const url = `${conf.apiEndpoint}${conf.plpUrl}?q=${query}`;
  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [query]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Plp products={data} page={page} />}
    </>
  );
};

export default PlpSearch;
