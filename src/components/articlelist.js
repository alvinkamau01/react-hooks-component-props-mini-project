import React from 'react';
import Article from './article';

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map(article => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
