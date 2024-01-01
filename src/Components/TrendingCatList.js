import React from "react";

const TrendingCatList = ({ data }) => {
  return (
    <li>
      <img src={data.img} />
      <p>{data.title}</p>
    </li>
  );
};

export default TrendingCatList;
