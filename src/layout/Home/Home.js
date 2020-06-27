import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.css';

const Home = ({ ciao }) => (
  <div className={styles.homepage}>
    Homepage
  </div>
);

Home.propTypes = {
  ciao: PropTypes.string,
};

export default Home;
