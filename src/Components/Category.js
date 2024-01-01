import React, { useState } from "react";
import CategoryList from "./CategoryList";
import bewkoof from "../Utils/bewkoof";

const Category = () => {
  return (
    <div className="container">
      <div className=" category-container flex-class">
        {bewkoof[0].data.map((item, index) => (
          <CategoryList key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
