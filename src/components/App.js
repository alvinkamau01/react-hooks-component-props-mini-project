import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
