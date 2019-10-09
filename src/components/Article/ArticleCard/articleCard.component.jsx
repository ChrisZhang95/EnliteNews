import React from "react";
import "./articleCard.scss";

const ArticleCard = ({ article }) => (
  <article className="articleCard">
    <div className="left">
      <h2>{article.title}</h2>
      <a
        className="dib"
        href="http://cbc.ca"
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
    <img className="right" alt="img" src={article.urlToImage}></img>
  </article>
);

export default ArticleCard;

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
