import React from "react";

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
        if (category === "general")
          return (
            <a
              key={i}
              className={`grow f5 link b no-underline black dib ph2 pv2 ${colors[i]}`}
              href={`/`}
            >
              {category}
            </a>
          );
        else
          return (
            <a
              key={i}
              className={`grow f5 link b no-underline black dib ph2 pv2 ${colors[i]}`}
              href={`/${category}`}
            >
              {category}
            </a>
          );
      })}
    </section>
  );
};

export default TopicMenu;
