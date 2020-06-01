import React from 'react';
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
      {articleContent}
    </div>
  </main>
);

export default Article;
