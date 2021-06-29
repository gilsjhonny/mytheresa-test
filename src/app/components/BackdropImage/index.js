import React from "react";
import PropTypes from "prop-types";
import "./index.sass";

const BackdropImage = ({ backdropSrc, height }) => (
  <div
    className="BackdropImage"
    style={{
      backgroundImage: backdropSrc ? `url('${backdropSrc}')` : "none",
      height: `${height}px`,
    }}
  />
);

BackdropImage.propTypes = {
  backdropSrc: PropTypes.string,
  height: PropTypes.number,
};

export default BackdropImage;
