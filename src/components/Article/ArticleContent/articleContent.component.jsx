import React from "react";
import "./articleContent.scss";

import { connect } from "react-redux";

const ArticleContent = ({ article }) => (
  <article className="articleCard">
    {console.log(article)}
    <div className="left">
      <h2>{article.title}</h2>
    </div>
    <img className="right" alt="img" src={article.urlToImage}></img>
  </article>
);

const mapStateToProps = state => ({
  article: state.articleReducer.article
});

export default connect(mapStateToProps)(ArticleContent);
