import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="Banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      <button className="btn">Our Rooms</button>
      {children}
    </div>
  );
};

export default Banner;