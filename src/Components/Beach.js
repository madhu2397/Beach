import React from "react";
const beach = ({ children, title, subtitle }) => {
  return (
    <div className="beach">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default beach;
