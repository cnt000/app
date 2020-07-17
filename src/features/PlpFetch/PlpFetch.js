import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';

import Plp from '../Plp/Plp';

const PlpFetch = () => {
  const { id } = useParams();
  const page = Math.max(id - 1, 0);
  const url = `https://pungilandia2020.appspot.com/api/v1/search/${page ? page : 0}`;

  const { loading, data = [] } = useFetch(url, { cacheLife: 1 }, [id]);
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
