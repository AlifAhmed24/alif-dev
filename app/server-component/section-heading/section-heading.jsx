import React from "react";
import "./section-heading.css";

function SectionHeading({ direction, heading }) {
  return (
    <div className="sectionHeading">
      {direction === "left" ? (
        <>
          <h1>{heading}</h1>
          <span className="border"></span>
        </>
      ) : (
        <>
          <span style={{marginLeft:'auto'}} className="border"></span>
          <h1>{heading}</h1>
        </>
      )}
    </div>
  );
}

export default SectionHeading;
