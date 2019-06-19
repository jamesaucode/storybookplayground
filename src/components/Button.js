import React from "react";

const Button = ({ clicked }) => {
  return (
    <button
      style={{ border: clicked ? "2px solid purple" : "2px solid green" }}
    >
      Test button
    </button>
  );
};

Button.defaultProps = {
  clicked: false
};

export default Button;
