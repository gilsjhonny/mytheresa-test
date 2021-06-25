import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.sass";

const MovieThumbnail = (props) => {
  const {
    height = 330,
    imgSrc,
    noHoverEffect = false,
    width = 200,
  } = props;

  return (
    <div
      className={classNames("MovieThumbnail", {
        noHoverEffect: noHoverEffect,
      })}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img alt="movie-poster" src={imgSrc} />
    </div>
  );
};

MovieThumbnail.propTypes = {
  imgSrc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default MovieThumbnail;
