import React, { useState } from "react";

const Button = ({ clicked }) => {
  const [myClicked, setMyClicked] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setMyClicked(!myClicked);
  };
  return (
    <button
      onClick={handleClick}
      style={{ border: myClicked ? "2px solid purple" : "2px solid green" }}
    >
      Test button
    </button>
  );
};

Button.defaultProps = {
  clicked: false
};

export default Button;
