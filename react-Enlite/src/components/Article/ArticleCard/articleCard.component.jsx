import React from "react";
import "./articleCard.scss";
import { connect } from "react-redux";
import { selectArticle } from "../../../redux/articlesRedux/articles.action";

const ArticleCard = ({ article, selectArticle }) => (
  <article className="articleCard ba b--black-10">
    <div className="article-info">
      <h3 className="article-title" onClick={() => selectArticle(article)}>
        {article.title}
      </h3>
      <a
        className="dib"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "blue" }}
      >
        {article.source.name}
      </a>
      <p className="dib ml2">
        {timeDifference(new Date(), new Date(article.publishedAt))}
      </p>
    </div>
    <img className="article-img" alt="img" src={article.urlToImage}></img>
  </article>
);

const mapDispatchToProps = dispatch => ({
  selectArticle: article => dispatch(selectArticle(article))
});

export default connect(
  null,
  mapDispatchToProps
)(ArticleCard);

const timeDifference = (current, previous) => {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
};
