import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

const Footer = ({
  copyright,
  privacy,
  contact,
  company,
  companyAddress,
  disclaimer,
  privacyLink,
  mailToLink,
}) => (
  <footer className={styles.footer}>
    <p>
      <span className={styles.copyright}>{copyright}</span> -{' '}
      <a className={styles.privacy} href={privacyLink}>
        {privacy}
      </a>{' '}
      -{' '}
      <a className={styles.contactus} href={mailToLink}>
        {contact}
      </a>
    </p>
    <address>
      {company}
      <br />
      {companyAddress}
    </address>
    <p className={styles.laws}>{disclaimer}</p>
  </footer>
);

Footer.propTypes = {
  copyright: PropTypes.string,
  privacy: PropTypes.string,
  contact: PropTypes.string,
  company: PropTypes.string,
  companyAddress: PropTypes.string,
  disclaimer: PropTypes.string,
  privacyLink: PropTypes.string,
  mailToLink: PropTypes.string,
};

export default Footer;
