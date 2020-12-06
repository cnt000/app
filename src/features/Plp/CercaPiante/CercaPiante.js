import React, { useContext, useState } from 'react';
import LabelsContext from '../../Labels';
import { useHistory, useLocation } from "react-router-dom";

import styles from './CercaPiante.module.css';

const CercaPiante = () => {
  const history = useHistory();
  const initialQuery = new URLSearchParams(useLocation().search).get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  function handleClick() {
    history.push(`/search/1?q=${query}`);
  }

  function handleKeypress(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const { searchPlants, searchPlantsImage } = useContext(LabelsContext);
  return <div className={styles.cercapiante}>
    <img src={searchPlantsImage} alt={searchPlants} />
    <div className={styles.searchInput}>
      <span>{searchPlants}</span>
      <input type="text" placeholder="cerca" value={query} onChange={handleChange} onKeyPress={handleKeypress} />
      <button onClick={handleClick}>Cerca</button>
    </div>
  </div>;
}

export default CercaPiante;
