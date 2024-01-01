import React from "react";

const ShopAllCollections = () => {
  return (
    <section className="onlyMobile flashSale">
      <h2 className="commonHeading">flash sale</h2>
      <p className="commonSubheading">
        Discounted price valid only for 2h:37m:30s
      </p>
      <div className="saleProducts">
        <div className="product-item flex-class">
          {bewkoof[1].data.map((item) => (
            <FlashSaleItems data={item} />
          ))}
        </div>
      </div>
      <a className="exploreLink">Explore All</a>
    </section>
  );
};

export default ShopAllCollections;
