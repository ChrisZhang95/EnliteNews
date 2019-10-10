import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "general",
  "business",
  "sports",
  "entertainment",
  "health",
  "science",
  "technology"
];

const colors = [
  "hover-blue",
  "hover-green",
  "hover-yellow",
  "hover-gold",
  "hover-orange",
  "hover-red",
  "hover-purple"
];

const TopicMenu = () => {
  return (
    <section className="bg-white bb b--light-gray">
      {categories.map((category, i) => {
        return (
          <Link
            key={i}
            className={`grow f5 link b no-underline black dib pa2 outline-0 ${colors[i]}`}
            to={`/${category}`}
            href={`/`}
          >
            {category}
          </Link>
        );
      })}
    </section>
  );
};

export default TopicMenu;
