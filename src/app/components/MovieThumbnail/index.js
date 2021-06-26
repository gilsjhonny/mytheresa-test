import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.sass";

const MovieThumbnail = (props) => {
  const {
    className,
    height = 330,
    noHoverEffect = false,
    posterSrc,
    width = 200,
  } = props;

  const thumbnailClassNames = classNames(
    "MovieThumbnail",
    {
      noHoverEffect: noHoverEffect,
    },
    className
  );

  return (
    <div
      className={thumbnailClassNames}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img alt="movie-poster" src={posterSrc} />
    </div>
  );
};

MovieThumbnail.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  posterSrc: PropTypes.string,
  width: PropTypes.number,
};

export default MovieThumbnail;
