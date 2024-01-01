import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeSlider = () => {
  return (
    <div className="container">
      <Carousel showArrows={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9572f08c5338af73.jpg?q=20" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ed12b7707a04473c.jpg?q=20" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3959ad9f670aeeeb.jpg?q=20" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
