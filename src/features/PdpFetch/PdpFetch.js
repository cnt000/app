import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { conf } from '../../conf/url';

import Pdp from '../Pdp/Pdp';

const PdpFetch = () => {
  const { id } = useParams();
  const page = id ? Math.max(id, 0) : 0;
  const url = `${conf.apiEndpoint}${conf.pdpUrl}${page}`;
  const { loading, data = {} } = useFetch(url, { cacheLife: 1 }, [id]);
  return (
    <>
      {loading && 'Loading...'}
      {!loading && <Pdp {...data} />}
    </>
  );
};

Pdp.propTypes = {
  Link: PropTypes.object,
};

export default PdpFetch;
