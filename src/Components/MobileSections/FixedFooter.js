import React from "react";

const FixedFooter = () => {
  return (
    <section className="onlyMobile fixedfooter">
      <div className="container">
        <ul>
          <li>
            <i class="fi fi-rs-house-chimney"></i>
            <p>Home</p>
          </li>
          <li>
            <i class="fi fi-rs-house-chimney"></i>
            <p>Category</p>
          </li>
          <li>
            <i class="fi fi-rr-rocket-lunch"></i>
            <p>Wxplore</p>
          </li>
          <li>
            <i class="fi fi-rs-user"></i>
            <p>Profile</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FixedFooter;
