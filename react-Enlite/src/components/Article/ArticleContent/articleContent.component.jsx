import React from "react";
import "./articleContent.scss";

import { connect } from "react-redux";

const ArticleContent = ({ article }) => {
  return (
  <div className="fr w-100  ph0-l mv3">
    <article className="fixed pv4 ph3 ba br3 b--black-10 ml3">
      <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 className="f3 athelas mt0 lh-title">{article.title}</h1>
          <a
            className="mr0"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >{article.name}
          </a>
          <div className="f5 f4-l lh-copy athelas">{article.description}</div>
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-50 w-40-ns">
          <img
            src={article.urlToImage}
            className="db w-3 h-auto br2 mr4"
            alt=""
          />
        </div>
      </div>
      <p className="f6 lh-copy gray mv0">
        By <span className="ttu">{article.author}</span>
      </p>
      <time className="f6 db gray">
        {new Date(article.publishedAt).toLocaleDateString()}
      </time>
    </article>
  </div>
);
}

const mapStateToProps = state => ({
  article: state.articleReducer.article
});

export default connect(mapStateToProps)(ArticleContent);
