import React from "react";
import bewkoof from "../Utils/bewkoof";
import LastMinutelist from "./LastMinutelist";

const LastMinute = () => {
  return (
    <div className="container">
      <p className="commonHeading onlyMobile">What's new</p>
      <div className="flex-class lastminuteslider">
        {bewkoof[4].data.map((item) => (
          <LastMinutelist data={item} />
        ))}
      </div>
    </div>
  );
};

export default LastMinute;
