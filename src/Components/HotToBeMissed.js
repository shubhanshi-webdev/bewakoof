import React from "react";
import bewkoof from "../Utils/bewkoof";
import HotToBeMissedList from "./HotToBeMissedList";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HotToBeMissed = () => {
  return (
    <section className="commonSpace">
      <div className="container">
        <h2 className="commonHeading">too hot to be missed</h2>
        <div className="onlyWeb">
        <div className="flex-class ">
          {bewkoof[2].data.map((item) => (
            <HotToBeMissedList data={item} key={item.id} />
          ))}
        </div>
        </div>

        <div className="onlyMobile">
          <Carousel showArrows={false} autoPlay={true} infiniteLoop={true}>
            {
              bewkoof[2].data.map((item) => (<div><img src={item.banner} /></div>))
            }
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HotToBeMissed;
