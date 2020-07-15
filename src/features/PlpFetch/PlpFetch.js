import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';

import Plp from '../Plp/Plp';

const PlpFetch = ({ Link }) => {
  const { id } = useParams();
  const page = Math.max(id - 1, 0);
  const url = `https://pungilandia2020.appspot.com/api/v1/search/${page}`;
console.log(url);

  const { loading, error, data = [] } = useFetch(url, {}, [url]);
  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {data.code === "404" && 'Nessun Risultato...'}
      {!error && !loading && <Plp products={data} Link={Link} />}
    </>
  );
};

Plp.propTypes = {
  Link: PropTypes.object,
};

export default PlpFetch;
