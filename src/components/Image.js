import React from "react";

const Image = ({ loading, imageSrc }) => {
  if (loading) {
    return <div className="spinner"></div>;
  } else {
    return <img className="image" src={imageSrc} alt="Probably a cat" />;
  }
};

Image.defaultProps = {
  loading: false
};

export default Image;
