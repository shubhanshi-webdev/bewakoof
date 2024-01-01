import React from "react";

const DesignOfWeek = () => {
  return (
    <section className="designOftheWeekSection commonSpace">
      <div className="container">
        <h2 className="commonHeading">design of the week</h2>
        <ul className="flex-class">
          <li className="design-banner">
            <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg" />
          </li>
          <li className="design-banner">
            <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1703576683.jpg" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DesignOfWeek;
