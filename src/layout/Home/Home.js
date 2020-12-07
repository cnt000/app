import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.css';
const Home = ({ ciao }) => (
  <div className={styles.homepage}>
    <div></div>
    <div className="who">
      <h2 className={styles.subtitle}>Chi siamo</h2>
      <div>Già, ci piacciono le piante strane, le piante che pungono. <br />
        Pungilandia non è solo una serra dove si coltivano e vendono piante rare, curiose, insolite: è anche un gruppo di amici che si incontrano, magari su internet, per discutere, scambiarsi esperienze ed impressioni, organizzare ed ampliare le proprie collezioni, piccole o grandi che siano, senza esclusioni o settarismi, cercando di diffondere l'amore per questi meravigliosi organismi della natura presso il più ampio numero di persone anche al fine di diffondere e propagare le specie più rare, spesso minacciate di estinzione. <br />
        Noi nutriamo una vera passione per le piante grasse, e, modestamente, le conosciamo piuttosto bene. <br /><br />
        <span className={styles.em}>Se deciderete di acquistare qualcosa da Pungilandia capirete subito che per noi non è solo un mestiere.</span><br /><br />
        Scrivici con <span className={styles.em}>Whatsapp</span> al <span>335.5373588</span></div>
    </div>
    <div className="where">
      <h2 className={styles.subtitle}>Dove siamo</h2>
      <div>Vi aspettiamo nella nuova sede Via Abruzzo s.n. Località Bucceri 65012 Cepagatti. <br />
      Uscita Villanova Autostrada A25 Pescara-Roma girare a destra dopo 200 metri girare a destra e percorrete Via Abruzzo oltrepassare il ponte sull'autostrada e girare alla prima traversa a destra , troverete sulla sinistra le nuove serre. <br /><br />
        <span className={styles.em}>Coord. Longitudinale: 14° 08' 08'' 09 Est</span><br />
        <span className={styles.em}>Coord. Latitudine: 42° 24' 04'' 04 Nord</span><br /><br />
        <span className={styles.em}>Le visite devono essere precedute da un contatto telefonico ( 335 5373588 )</span>

        <div>
          <a href="https://goo.gl/maps/BcwCsom3fr3xKzSM8">
            <img
              src="https://storage.googleapis.com/pungi-assets/assets/pungilandia-maps-small01.png"
              srcSet="https://storage.googleapis.com/pungi-assets/assets/pungilandia-maps-small01.png 2x,
              https://storage.googleapis.com/pungi-assets/assets/pungilandia-maps-small.png 1x"
              alt="pungilandia on map" />
          </a>
        </div>
      </div>
    </div>
    <div className="contact">
      <h2 className={styles.subtitle}>Contatti</h2>
      <div>Per contattarci direttamente potete telefonare al <span className={styles.bold}>dott. Mimmo Rocchi</span> al numero 335/5373588.</div>
    </div>
    <div className="ourSelection">
      <h2 className={styles.subtitle}>I nostri prodotti</h2>
      <div>Potete visualizzare i nostri prodotti:
      <ul className={styles.list}>
          <li>
            <a href="/plp/1">dalla nostra selezione in questo sito</a></li>
          <li>
            <a href="https://goo.gl/maps/BcwCsom3fr3xKzSM8">venendoci a trovare nelle nostre serre</a></li>
          <li>
            <a href="https://www.amazon.it/stores/Pungilandia/Pungilandia/page/6B98F9E3-EC28-446C-BE05-73AED726330C">sul nostro marketplace Amazon</a></li>
          <li>
            <a href="https://www.youtube.com/user/pungilandia/videos">sul nostro youtube</a></li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
);

Home.propTypes = {
  ciao: PropTypes.string,
};

export default Home;
