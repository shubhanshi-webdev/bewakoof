import React from "react";
import bewkoof from "../../Utils/bewkoof";

const OfficialCollaboration = () => {
  return (
    <section className="officialCollaborationSection onlyMobile">
      <div className="container">
        <div className="">
          <h2 className="commonHeading">official collaborations</h2>
          <ul className="collaborationList">
            {bewkoof[5].data.map((item) => (
              <li>
                <img src={item.img} />
              </li>
            ))}
          </ul>
          <a className="exploreLink">Explore all</a>
        </div>
      </div>
    </section>
  );
};

export default OfficialCollaboration;
