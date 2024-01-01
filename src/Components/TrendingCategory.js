import React from "react";
import bewkoof from "../Utils/bewkoof";
import TrendingCatList from "./TrendingCatList";

const TrendingCategory = () => {
  return (
    <section className="commonSpace">
      <div className="container">
        <h2 className="commonHeading ">Trending Categories</h2>
        <p className="commonSubheading onlyWeb">
          Stay ahead of the fashion game with these hot trends to try!
        </p>
        <ul className="trendingCategory">
          {bewkoof[3].data.map((item) => (
            <TrendingCatList data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrendingCategory;
