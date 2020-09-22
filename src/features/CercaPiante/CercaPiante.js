import React, { useContext, useState } from 'react';
import LabelsContext from '../Labels';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './CercaPiante.module.css';

const CercaPiante = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  function handleClick(e) {
    history.push(`/search?q=${query}`);
  }

  const { searchPlants, searchPlantsImage } = useContext(LabelsContext);
  return <div className={styles.cercapiante}>
    <img src={searchPlantsImage} alt={searchPlants} />
    <div className={styles.searchInput}>
      <span>{searchPlants}</span>
      <input type="text" placeholder="cerca" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleClick}>Cerca</button>
    </div>
  </div>;
}

export default CercaPiante;
