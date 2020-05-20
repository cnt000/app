import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <span className={styles.copyright}>Copyright © 2020</span> -
      <a className={styles.privacy} href="http://www.pungilandia.com">
        Privacy
      </a>{' '}
      -
      <a className={styles.contactus} href="mailto:info@pungilandia.com">
        Contatti
      </a>
    </p>
    <address>
      Azienda Agricola Pungilandia Rocchi Domenico
      <br />
      Via Isonzo 11, 65123 Pescara P.IVA 01203140684 CF RCCDNC59R30I712B
      Iscrizione REA Pescara Nr.97422
    </address>
    <p className={styles.laws}>
      Azienda in possesso Registro di Detenzione di Specie Vegetali Incluse
      Negli Allegati CITES A e B del Regolamento (CE) 338/97 del Consiglio del 9
      Dicembre 1996 e Successive Modifiche e Attuazioni. Registro N.000001/2001
      VAB
    </p>
  </footer>
);

export default Footer;
