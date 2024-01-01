import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bewkoof from "../../Utils/bewkoof";

const Bestofbewkoof = () => {
  return (
    <section className="commonSpace onlyMobile">
      <div className="container">
        <h2 className="commonHeading">best of bewakoof</h2>
        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true}>
          {bewkoof[6].data.map((item) => (
            <div>
              <img src={item.banner} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Bestofbewkoof;
