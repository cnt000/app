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
  <footer className={`${styles.footer} tc pa2`}>
    <p>
      <span className={styles.copyright}>{copyright}</span> -{' '}
      <a className={styles.privacy} href={privacyLink}>
        {privacy}
      </a>{' '}
      -{' '}
      <a className="f5 mt2" href={mailToLink}>
        {contact}
      </a>
    </p>
    <address>
      {company}
      <br />
      {companyAddress}
    </address>
    <p className="center fw3 w-80 w-60-ns mt1 mt2-ns lh-title f7 dn db-ns">{disclaimer}</p>
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
