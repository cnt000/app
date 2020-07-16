import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import useFetch from 'use-http';

import Plp from '../Plp/Plp';

const PlpFetch = () => {
  const { id } = useParams();
  const location = useLocation();
  const page = Math.max(id - 1, 0);
  const url = `https://pungilandia2020.appspot.com/api/v1/search/${page}`;

  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [id, location]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Plp products={data} page={page} />}
    </>
  );
};

Plp.propTypes = {
  Link: PropTypes.object,
};

export default PlpFetch;
