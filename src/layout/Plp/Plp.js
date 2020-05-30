import React from 'react';
import styles from './Plp.modules.css';

const Plp = () => (
  <main className={styles.plpContent} role="main">
    <div className="page-header">
      <div className="left">
        <h2 className="title">Le nostre piante</h2>
        <span className="lastmodified">02/04/2020</span>
      </div>
      <div className="cercapiante">
        <a href="#" title="cerca piante">
          <img
            src="http://www.pungilandia.com/php/images/lo/cotyl_mediop.jpg"
            alt="cerca piante"
          />
          <span>il cerca piante</span>
        </a>
      </div>
    </div>
    <div className="products">
      <article className="product">
        <a href="#" className="image-container">
          <img
            className="image"
            src="http://www.pungilandia.com/php/images/hi/adromischus-clavifolius.jpg"
            alt="Adromischus  clavifolius"
          />
          <h1 className="name">Adromischus clavifolius Ų 24</h1>
          <div>€ 9,00</div>
        </a>
        <button className="addtocart">Aggiungi al carrello</button>
      </article>
    </div>
  </main>
);

export default Plp;
