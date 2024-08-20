import React from 'react';
import blogData from '../data/blog';
import Header from './header';
import About from './about';
import ArticleList from './articlelist';

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
