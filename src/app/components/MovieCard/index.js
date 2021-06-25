import React from "react";
import PropTypes from "prop-types";
import MovieThumbnail from "../MovieThumbnail";
import "./index.sass";

const MovieCard = (props) => {
  const {
    title = "No Title",
    release_date = "Unknown",
    image_src = "",
    width = 200,
    height = 310,
  } = props;

  return (
    <div className="MovieCard" style={{ width: `${width}px` }}>
      <MovieThumbnail
        imgSrc={image_src}
        height={height}
        width={width}
      />
      <div className="MovieCard__info">
        <span className="MovieCard__info__title">{title}</span>
        <span className="MovieCard__info__date">{release_date}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  image_src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default MovieCard;
