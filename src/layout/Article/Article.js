import React from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.css';

const Article = ({
  hintsFromPungilandiaTitle,
  articleBy,
  articleContent,
  mimmoImage,
}) => (
  <main className={styles.articleContent} role="main">
    <div className={styles.pageContent}>
      <h2>{hintsFromPungilandiaTitle}</h2>
      <div className={styles.authorBox}>
        <img src={mimmoImage} alt="" />
        <span>{articleBy}</span>
      </div>
      <div dangerouslySetInnerHTML={{__html: articleContent}}></div>
    </div>
  </main>
);

Article.propTypes = {
  hintsFromPungilandiaTitle: PropTypes.string,
  articleBy: PropTypes.string,
  articleContent: PropTypes.string,
  mimmoImage: PropTypes.string,
};

export default Article;
