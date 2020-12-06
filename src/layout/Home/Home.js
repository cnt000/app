import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.css';
const Home = ({ ciao }) => (
  <div className={styles.homepage}>
    Homepage
    Chi siamo
    Dove siamo
    Contatti
    I nostri prodotti
  </div>
);

Home.propTypes = {
  ciao: PropTypes.string,
};

export default Home;
