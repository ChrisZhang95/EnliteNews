import React from "react";
import ArticleList from "../../components/Article/ArticleList/articleList.component";
import ArticleContent from "../../components/Article/ArticleContent/articleContent.component";

import "./home.page.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage-left">
        <ArticleList />
      </div>
      <div className="homePage-right">
        <ArticleContent />
      </div>
    </div>
  );
};

export default HomePage;
