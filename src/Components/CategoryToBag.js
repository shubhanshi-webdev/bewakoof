import React from "react";
import bewkoof from "../Utils/bewkoof";
import CategoryToBagList from "./CategoryToBagList";

const CategoryToBag = () => {
  return (
    <section className="categoryToBagSection">
      <div className="container">
        <h2 className="commonHeading">Categories To Bag</h2>
        <div className="flex-class catBag-container">
          {bewkoof[1].data.map((item) => (
            <CategoryToBagList data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryToBag;
