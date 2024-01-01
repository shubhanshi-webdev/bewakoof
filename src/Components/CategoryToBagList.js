import React from "react";

const CategoryToBagList = ({data,index}) => {
  return (
    <div className="category-bag">
    <div className="catBagItem">
      <img src={data.image } />
    </div>
     <p>{data.title}</p>
    </div>

  );
};

export default CategoryToBagList;
